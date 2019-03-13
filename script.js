
//https://lodash.com/ používam browserify
// 1. npm init - vytvorí package.json
// 2. browserify script.js > bundle.js /po každej zmene nutné aktualizovať, 

var _ = require('lodash');

arr = [1,2,3,4,5];
console.log('answer: ', _.without(arr, 3));

var css = document.querySelector('h3');
var col1 = document.querySelector('.color-1');
var col2 = document.querySelector('.color-2');
var b = document.getElementById('gradient');

function change() {
    b.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";

    css.textContent = b.style.background + ';';
}

// col1.addEventListener('input', change);
// col2.addEventListener('input', change);