/**
 * Created by andrej on 3/15/16.
 */
'use strict';

var triangleOff = document.getElementById('listOff');
var triangleOn = document.getElementById('listOn');
var list = document.getElementById('hidden');

triangleOn.style.display = 'none';
list.style.display = 'none';


triangleOff.onclick = function () {
    list.style.display = '';
    triangleOff.style.display = 'none';
    triangleOn.style.display = '';
};

triangleOn.onclick = function () {
    list.style.display = 'none';
    triangleOn.style.display = 'none';
    triangleOff.style.display = '';
};
