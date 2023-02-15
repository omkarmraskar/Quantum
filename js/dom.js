"use strict";
export const __esModule = true;
var hamburger = document.getElementById("burger-icon");
hamburger.addEventListener("mouseover", function () {
    var toogle = document.querySelector("#burger-icon");
    toogle.classList.add("open");
    var menu = document.querySelector(".nav-items");
    menu.classList.add("show");
});
var removemenu;
hamburger.addEventListener("click", function () {
    removemenu = setTimeout(function () {
        var toogle = document.querySelector("#burger-icon");
        toogle.classList.add("open");
        var menu = document.querySelector(".nav-items");
        menu.classList.remove("show");
    }, 400);
});
clearTimeout(removemenu);
