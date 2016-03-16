/**
 * Created by andrej on 3/9/16.
 */
'use strict';


function createFieldForMaze() {
    if ((numberOfRows < 5 || isNaN(numberOfRows))
        || (numberOfColumns < 5 || isNaN(numberOfColumns))) {
        makeNotification();
    } else {
        makeField();
    }
}

function makeNotification() {
    alert("Quantity of Rows and Quantity of Columns " +
    "must be more than 4, Number of bomb must be more then " +
    "(Rows * Columns) * 0.2");
}

function makeField() {
    var field = document.getElementById('field');
    for (var i = 0; i < numberOfRows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < numberOfColumns; j++) {
            var td = document.createElement('td');
            td.className = 'close';
            tr.appendChild(td);
        }
        field.appendChild(tr);
    }
}

