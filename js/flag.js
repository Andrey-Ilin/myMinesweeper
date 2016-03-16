/**
 * Created by andrej on 3/15/16.
 */
'use strict';

table.addEventListener('contextmenu', putFlag);
var countFlags;

function putFlag(event) {
    var flag;

    target = event.target;

    var td = target.closest('TD');

    if (!td) {
        return;
    }
    if (td.querySelector('[class = "flag"]')) {
        td.removeChild(td.querySelector('[class = "flag"]'))
    } else {
        if (countFlags) {
            flag = new Image();
            flag.src = './img/flag.png';
            flag.className = 'flag';
            td.appendChild(flag);
            countFlags--;
        }
    }
    event.preventDefault();

    document.querySelector('#counter').style.display = 'inline';
    document.querySelector('#numberCounter').textContent = countFlags;
}