/**
 * Created by andrej on 3/16/16.
 */

'use strict';

var field = document.querySelector('#field');
var mousedoun = new Event('mousedown');
var mouseup = new Event('mouseup');
var click = new Event('click');

describe('Add Field', function () {

    it('Get quantity of rows from the input', function() {
        addField.dispatchEvent(mousedoun);
        expect(numberOfRows).to.equal(10);
    });

    it('Get quantity of columns from the input', function() {
        addField.dispatchEvent(mousedoun);
        expect(numberOfColumns).to.equal(10);
    });

    it('Adding field with bombs after the button "Add field" has pressed',
        function () {
            var mousedoun = new Event('mousedown');
            var mouseup = new Event('mouseup');
            var click = new Event('click');

            addField.dispatchEvent(mousedoun);
            addField.dispatchEvent(mouseup);
            addField.dispatchEvent(click);
            expect(field.children.length).to.not.equal(0);
        });

    it('Show fields', function() {
        addField.dispatchEvent(click);
        expect(field.style.display).to.equal('block');
    });

    it('Get number of bombs', function() {
        addField.dispatchEvent(mousedoun);
        expect(numberOfBombs).to.equal(20);
    });

    it('Quantity of bombs on the field equal input quantity of bombs and bombs installed', function() {
       var countBombs = 0;
        for (var i = 0; i < numberOfRows; i ++) {
            for (var j = 0; j < numberOfColumns; j++) {
                if (table.rows[i].cells[j].firstElementChild
                    && table.rows[i].cells[j].firstElementChild.className == 'bomb') {
                    countBombs++
                }
            }
        }
        expect(countBombs).to.equal(numberOfBombs);
    });

    it('At first all bombs invisible', function() {
       var invisible = true;
        for (var i = 0; i < numberOfRows; i ++) {
            for (var j = 0; j < numberOfColumns; j++) {
                if (table.rows[i].cells[j].firstElementChild
                    && table.rows[i].cells[j].firstElementChild.style.display != 'none') {
                    invisible = false;
                    break;
                }
            }
        }
        expect(invisible).to.equal(false);
    });
});

describe('Open squares', function () {

    it('If click on square his class from "close" will change to "open', function() {
        var i = Math.floor(Math.random() * numberOfRows);
        var j = Math.floor(Math.random() * numberOfColumns);

        table.rows[i].cells[j].addEventListener('click', openSquare);
        table.rows[i].cells[j].dispatchEvent(click);
        expect(table.rows[i].cells[j].className).to.equal('open');
    });

    it('If click on square and it is bomb all bombs to explode', function () {
        outer: for (var i = 0; i < numberOfRows; i++) {
            for (var j = 0; j < numberOfRows; j++) {
                if (table.rows[i].cells[j].querySelector('[class="bomb"]')) {
                    click = new Event('click');
                    table.rows[i].cells[j].addEventListener('click', openSquare);
                    table.rows[i].cells[j].dispatchEvent(click);
                    break outer;
                }
            }
        }

        var countBombs = 0;

        for (i = 0; i < numberOfRows; i++) {
            for (j = 0; j < numberOfColumns; j++) {
                if (table.rows[i].cells[j].firstElementChild
                    && table.rows[i].cells[j].firstElementChild.className == 'bomb'
                    && table.rows[i].cells[j].className == 'open') {
                    countBombs++
                }
            }
        }
        expect(countBombs).to.equal(numberOfBombs);
    });
});