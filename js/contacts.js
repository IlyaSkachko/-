"use strict";


var hiddenElement = document.querySelector(".footer");
var btn = document.querySelector('.contacts');

function handleButtonClick() {
    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);