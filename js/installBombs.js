/**
 * Created by andrej on 3/13/16.
 */

'use strict';

var numberOfBombs;
var bomb;

addField.addEventListener('mousedown', getNumberOfBombs);
addField.addEventListener('mouseup', createBombs);

function getNumberOfBombs() {
    numberOfBombs = countFlags = +document.getElementById('numberOfBombs').value;

    if ((numberOfBombs < numberOfRows * numberOfColumns * 0.2)
        || isNaN(numberOfBombs)
        || (numberOfBombs > numberOfRows * numberOfColumns)) {
        makeNotification();
    }
    return numberOfBombs;
}

function createBombs() {
    for (var i = 0; i < numberOfBombs; i++) {
        var indexI = Math.floor(Math.random() * numberOfRows);
        var indexJ = Math.floor(Math.random() * numberOfColumns);

        bomb = new Image();
        bomb.src = './img/bomb.png';
        bomb.className = 'bomb';
        bomb.hidden = true;

        if (!table.rows[indexI].cells[indexJ].firstElementChild) {
            table.rows[indexI].cells[indexJ].appendChild(bomb);
        } else {
            i--;
        }
    }
}
