/**
 * Created by andrej on 3/15/16.
 */
'use strict';

table.addEventListener('contextmenu', putFlag);
var countFlags;

function putFlag(event) {
    var flag;

    target = event.target;
    if (target.tagName != 'TD') {
        return;
    }
    if (target.querySelector('[class = "flag"]')) {
        target.removeChild(target.querySelector('[class = "flag"]'))
    } else {
        if (countFlags) {
            flag = new Image();
            flag.src = './img/flag.png';
            flag.className = 'flag';
            target.appendChild(flag);
            countFlags--;
        }
    }
    event.preventDefault();

    document.querySelector('#counter').style.display = 'inline';
    document.querySelector('#numberCounter').textContent = countFlags;
}