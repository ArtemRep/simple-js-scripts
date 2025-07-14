const output = document.getElementById('output');
const buttons = document.querySelectorAll('nav div');

let current = buttons[0];

function showImage(){
    current = this;
    //console.log(this)
    output.setAttribute('src', `images/${this.id}.jpg`);

    buttons.forEach(el =>{
        if(el == this){
            el.className = 'active'
        }
        else{
            el.className = '';
        }
    });

    
}

buttons.forEach(element => {
    element.addEventListener('click', showImage)
});
