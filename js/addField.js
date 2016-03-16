/**
 * Created by andrej on 3/9/16.
 */
'use strict';
var numberOfRows;
var numberOfColumns;

var addField = document.getElementById('addFieldForMineField');

addField.addEventListener('mousedown', getFieldSize);
addField.addEventListener('mouseup', createFieldForMaze);
addField.addEventListener('click', showField);

function getFieldSize() {
    numberOfRows = +document.getElementById('rows').value;
    numberOfColumns = +document.getElementById('columns').value;
}

function showField() {
    document.getElementById('field').style.display = 'block';
    if (numberOfRows < 5
        || isNaN(numberOfRows)
        || numberOfColumns < 5
        || isNaN(numberOfColumns)
        || numberOfBombs < numberOfRows * numberOfColumns * 0.2
        || isNaN(numberOfBombs)
        || numberOfBombs > numberOfRows * numberOfColumns) {
        return;
    }
    addField.removeEventListener('mousedown', getFieldSize);
    addField.removeEventListener('mouseup', createFieldForMaze);
    addField.removeEventListener('click', showField);
}
