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
var hamburgerOut = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", function () {
    removemenu = setTimeout(function () {
        var toogle = document.querySelector("#burger-icon");
        toogle.classList.add("open");
        var menu = document.querySelector(".nav-items");
        menu.classList.remove("show");
    }, 400);
});
clearTimeout(removemenu);
var alert = document.getElementById("alert-image");
alert.addEventListener("mouseover", function () {
    alert.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector("#alert_wrapper");
    // menu.style.display = "block";
    menu.classList.add("show_block");
    menu.setAttribute("open", "");
});
function removealertmenu() {
    setTimeout(function () {
        var menu = document.querySelector("#alert_wrapper");
        // menu.style.display = "none";
        alert.style.filter = "none";
        menu.classList.remove("show_block");
        menu.removeAttribute("open");
    }, 100);
}
var alert_wrapper = document.getElementById("alert_wrapper");
alert_wrapper.addEventListener("mouseleave", removealertmenu);
alert.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".alert_wrapper:hover")) {
            removealertmenu();
        }
    }, 100);
});
var announcement = document.getElementById("announcement");
announcement.addEventListener("mouseover", function () {
    announcement.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector("#announcement_wrapper");
    // menu.style.display = "block";
    menu.classList.add("show_block");
    menu.setAttribute("open", "");
});
function remvoveannouncementmenu() {
    setTimeout(function () {
        var menu = document.querySelector("#announcement_wrapper");
        // menu.style.display = "none";
        announcement.style.filter = "none";
        menu.classList.remove("show_block");
        menu.removeAttribute("open");
    }, 400);
}
// announcement.addEventListener("click",remvoveannouncementmenu);
var announcement_wrapper = document.getElementById("announcement_wrapper");
announcement_wrapper.addEventListener("mouseleave", remvoveannouncementmenu);
announcement.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".announcement_wrapper:hover")) {
            remvoveannouncementmenu();
        }
    }, 100);
});
