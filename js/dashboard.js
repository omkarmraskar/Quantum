"use strict";
exports.__esModule = true;
function changeOpacity(id) {
    var x = document.getElementById(id);
    x.classList.toggle("opacityChange");
}
function favorite(id) {
    var x = document.getElementById(id);
    x.classList.toggle("opacityChange");
}
function CourseClassHighlight(id, clas) {
    var x = document.getElementById(id);
    var y = document.getElementsByClassName(clas);
    for (var i = 0; i < y.length; i++) {
        y[i].style.borderBottom = "4px solid #eeeeee";
    }
    x.style.borderBottom = "4px solid #222222";
}
function menuHighlight(id, clas) {
    var x = document.getElementById(id);
    var y = document.getElementsByClassName(clas);
    for (var i = 0; i < y.length; i++) {
        y[i].style.borderBottom = "0";
        y[i].style.color = "#3FD28B";
    }
    x.style.borderBottom = "4px solid #ffffff";
    x.style.color = "white";
}
function toggleMenu(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
}
