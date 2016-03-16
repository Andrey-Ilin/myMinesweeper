/**
 * Created by andrej on 3/9/16.
 */
'use strict';
var table = document.getElementById('field');
var selectedTd;
var target;

var neighbours = [];

var i;
var j;

table.addEventListener('click', openSquare);

function openSquare(event) {
    target = event.target;

    var td = target.closest('TD');
    if (!td) {
        return;
    }

    highlight(td);

    if (isBomb(td)) {
        openAllBombs();
        alert('GAME OVER');
    } else {
        addNumberOfBombsNeighbour(td);
    }
}

function highlight(node) {
    selectedTd = node;
    selectedTd.className = 'open';
}

function openAllBombs() {
    for (var i = 0; i < numberOfRows; i++) {
        for (var j = 0; j < numberOfColumns; j++) {
            if (table.rows[i].cells[j].firstElementChild
                && (table.rows[i].cells[j].firstElementChild.className = 'bomb')) {

                table.rows[i].cells[j].className = 'open';
                table.rows[i].cells[j].firstElementChild.hidden = false;
                table.removeEventListener('click', openSquare);
                table.removeEventListener('contextmenu', putFlag);
            }
        }
    }
}

function isBomb(element) {
    if (element.querySelector('[class = "bomb"]')) {
        return true;
    } else {
        return false;
    }
}

function addNumberOfBombsNeighbour(target) {
    var numberOfBombs = 0;

    if (target) {
        i = target.parentNode.rowIndex;
        j = target.cellIndex;
    }
    if (i != 0
        && j != 0
        && i != (numberOfRows - 1)
        && j != (numberOfColumns - 1)) {

        /* inner square*/

        if (isBomb(getLeft())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }
        if (isBomb(getTop())) {
            numberOfBombs++;
        }
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftTop())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getRightTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRightBottom())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {

            neighbours = [getLeft(), getRight(), getTop(), getBottom(), getLeftTop(), getLeftBottom(), getRightTop(), getRightBottom()];
            clickOnNeighbours(neighbours);
        }
    }


    /*top side*/

    if (i == 0 && j != 0 && j != numberOfColumns - 1) {
        if (isBomb(getLeft())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getRightBottom())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {
            neighbours = [getLeft(), getRight(), getBottom(), getLeftBottom(), getRightBottom()];
            clickOnNeighbours(neighbours);
        }
    }

    /*left top corner*/

    if (i == 0 && j == 0) {
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getRightBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {
            neighbours = [getBottom(), getRightBottom(), getRight()];
            clickOnNeighbours(neighbours);
        }
    }

    /*right top corner*/

    if (i == 0 && j == (numberOfColumns - 1)) {
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getLeft())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {
            neighbours = [getBottom(), getLeftBottom(), getLeft()];
            clickOnNeighbours(neighbours)
        }
    }

    /*left side*/

    if (i != 0 && i != (numberOfRows - 1) && j == 0) {
        if (isBomb(getTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRightTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }
        if (isBomb(getRightBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (!numberOfBombs) {
            neighbours = [getTop(), getRightTop(), getRight(), getRightBottom(), getBottom()];
            clickOnNeighbours(neighbours)
        }
    }

    /*left bottom corner*/

    if (i == (numberOfRows - 1) && j == 0) {
        if (isBomb(getTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRightTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {
            neighbours = [getTop(), getRightTop(), getRight()];
            clickOnNeighbours(neighbours)
        }
    }

    /*bottom side*/

    if (i == (numberOfRows - 1) && j != (numberOfColumns - 1) && j != 0) {
        if (isBomb(getLeft())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftTop())) {
            numberOfBombs++;
        }
        if (isBomb(getTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRightTop())) {
            numberOfBombs++;
        }
        if (isBomb(getRight())) {
            numberOfBombs++;
        }
        if (!numberOfBombs) {
            neighbours = [getLeft(), getLeftTop(), getTop(), getRightTop(), getRight()];
            clickOnNeighbours(neighbours)
        }
    }

    /*right bottom corner*/

    if (i == (numberOfRows - 1) && j == (numberOfColumns - 1)) {
        if (isBomb(getLeft())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftTop())) {
            numberOfBombs++;
        }
        if (isBomb(getTop())) {
            numberOfBombs++;
        }

        if (!numberOfBombs) {
            neighbours = [getLeft(), getLeftTop(), getTop()];
            clickOnNeighbours(neighbours)
        }
    }

    /*right side*/

    if (i != 0 && i != (numberOfRows - 1) && j == (numberOfRows - 1)) {
        if (isBomb(getBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftBottom())) {
            numberOfBombs++;
        }
        if (isBomb(getLeft())) {
            numberOfBombs++;
        }
        if (isBomb(getLeftTop())) {
            numberOfBombs++;
        }
        if (isBomb(getTop())) {
            numberOfBombs++;
        }
        if (!numberOfBombs) {
            neighbours = [getBottom(), getLeftBottom(), getLeft(), getLeftTop(), getTop()];
            clickOnNeighbours(neighbours)
        }
    }

    if (numberOfBombs) {
        table.rows[i].cells[j].textContent = numberOfBombs;
    }
}

function clickOnNeighbours(arr) {
    var click;
    arr.forEach(function (element) {
        if (element.className == 'close') {
            click = new Event('click');
            element.addEventListener('click', autoOpenSquare);
            element.dispatchEvent(click);
        }
    });
}

function autoOpenSquare(event) {
    target = event.target;
    highlight(target);
    addNumberOfBombsNeighbour(target);
}


function getLeft() {
    return table.rows[i].cells[j - 1];
}

function getRight() {
    return table.rows[i].cells[j + 1];
}

function getTop() {
    return table.rows[i - 1].cells[j];
}

function getBottom() {
    return table.rows[i + 1].cells[j];
}

function getLeftTop() {
    return table.rows[i - 1].cells[j - 1];
}

function getLeftBottom() {
    return table.rows[i + 1].cells[j - 1];
}

function getRightTop() {
    return table.rows[i - 1].cells[j + 1];
}

function getRightBottom() {
    return table.rows[i + 1].cells[j + 1];
}
