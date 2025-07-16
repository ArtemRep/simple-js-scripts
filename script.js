

function insertLargeImageIntoSlider(src, slider) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', src);

    if (slider.children[slider.children.length - 1].localName == 'img') {
        console.log('Нужно удалить img')
        slider.removeChild(slider.children[slider.children.length - 1]);

    }
    slider.appendChild(imgElement);
}

class MyIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el
    }

    setInnerIndex(index) {
        this.index = index
    }

    next() {
        if (this.index < 0) {
            this.index = 1;
        }
        const nextElem = this.elements[this.index]
        this.index++
        return nextElem
    }

    hasNext() {

        return this.index < this.elements.length;
    }

    prev() {
        if (this.index == this.elements.length) {
            const el = this.index - 2
            this.index -= 2
            return this.elements[el]

        }
        console.log('PREV', this.index)
        this.index -= 1
        return this.elements[this.index]
    }

    hasPrev() {
        return this.index >= 0
    }

}




document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const fullBig = document.querySelector('.show-full-img');
    const sliderImgs = document.querySelectorAll('.slider__img');

    const prevBtn = document.querySelector('a[href="#prev"]');
    const nextBtn = document.querySelector('a[href="#next"]');

    const myIterator = new MyIterator(sliderImgs)

    nextBtn.addEventListener('click', function (event) {



        if (myIterator.hasNext()) {
            const src = myIterator.next().getAttribute('src');
            const tumbnailSrc = src.split('/').at(-1)

            const srcBig = tumbnailSrc.replace('s', 'b');
            fullPathBigPicture = `img/big/${srcBig}`;
            insertLargeImageIntoSlider(fullPathBigPicture, fullBig);
        } else {
            console.log('картинки кончились')
        }
    })

    prevBtn.addEventListener('click', function () {
        if (myIterator.hasPrev()) {
            const src = myIterator.prev().getAttribute('src');
            const tumbnailSrc = src.split('/').at(-1)
            const srcBig = tumbnailSrc.replace('s', 'b');
            fullPathBigPicture = `img/big/${srcBig}`;
            insertLargeImageIntoSlider(fullPathBigPicture, fullBig);

        } else {
            console.log('картинки кончились')
        }
    })






    function clickHandler(event) {
        const src = event.target.getAttribute('src');
        const tumbnailSrc = src.split('/').at(-1)
        const srcBig = tumbnailSrc.replace('s', 'b');

        fullPathBigPicture = `img/big/${srcBig}`;
        insertLargeImageIntoSlider(fullPathBigPicture, fullBig);
        const indexIterator = srcBig.substring(3, 4);
        myIterator.setInnerIndex(indexIterator)
    }

    slider.addEventListener('click', clickHandler)
})