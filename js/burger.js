"use strict";

const menu = document.querySelector(".mobile__menu"),
      button = document.querySelector(".mobile__burger");

let flag = false;

button.addEventListener("click", () => {
    if (flag) {
        menu.style.display = "none";
        flag = false;
    } else {
        menu.style.display = "block";
        flag = true;
    }
});
