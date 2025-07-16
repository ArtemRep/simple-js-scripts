// кто ходит
// 0 - ноль
// 1 - крестик
// По умолчанию первым ходит крестик

let phase = 1;

// результат храним в массиве
// -1 - отсутствие значения(ход игроков не сделан)
let result = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];


class Player {
    sign
    constructor(sign, id) {
        this.sign = sign
        this.id = id
    }
}

const player1 = new Player('X', 1);
const player2 = new Player('0', 2);

let id = 1;

document.querySelector('.tictactoe').addEventListener('click', function (event) {
    console.log(event.target)
    let cell = event.target;
    let cellContent;

    let rowIndex = cell.dataset.row;
    let cellIndex = cell.dataset.cell;

    if (result[rowIndex][cellIndex] == -1) {
        if (id == player1.id) {
            console.log('Player1 hod')
            cellContent = player1.sign;
            result[rowIndex][cellIndex] =player1.id
            id = 2;
        }

        else if (id = player2.id) {
            console.log('Player2 hod')
            cellContent = player2.sign;
            result[rowIndex][cellIndex] =player2.id
            id = 1;
        }
        console.log("ID2 ", id)
        cell.innerText = cellContent;
    }
    else{
         alert('Выберите другую ячейку!');
    }

    console.log('result', result)
     let winCondition = checkWinCondition();
    switch (winCondition) {
        case -1:
            // игра продолжается
            break;
        case 1:
            alert('победил игрок: ' + player1.id);
            //location.reload();
            break;
        case 2:
            alert('победил игрок: ' + player2.id);
           // location.reload();
            break;
    }
})



function checkWinCondition() {
    // в ряду, столбце или диагонали будут одинаковые числа
    // -1 - игра продолжается
    // 1 - побеждают крестики
    // 0 - побеждают нолики
    let win;

    for (let i = 1; i <= 2; i++) {
        if (
            // по вертикали
            (result[0][0] == i && result[1][0] == i && result[2][0] == i) ||
            (result[0][1] == i && result[1][1] == i && result[2][1] == i) ||
            (result[0][2] == i && result[1][2] == i && result[2][2] == i) ||

            // по горизонтали
            (result[0][0] == i && result[0][1] == i && result[0][2] == i) ||
            (result[1][0] == i && result[1][1] == i && result[1][2] == i) ||
            (result[2][0] == i && result[2][1] == i && result[2][2] == i) ||

            // по диагонали
            (result[0][0] == i && result[1][1] == i && result[2][2] == i) ||
            (result[2][0] == i && result[1][1] == i && result[0][2] == i)
        ) {
            win = i;
        }
    }

    if (win === undefined) {
        win = -1;
    }

    return win;
}

//window.onload = generateField;
