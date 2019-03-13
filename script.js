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