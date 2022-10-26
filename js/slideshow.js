"use strict";

const slide1 = document.querySelector(".slide1"),
    slide2 = document.querySelector(".slide2"),
    slide3 = document.querySelector(".slide3"),
    slideshow = document.querySelector(".slideshow");

let text = document.querySelector(".slideshow__text");
let count = 1;

setInterval(nextSlide, 4000);

function nextSlide() {
    switch (count) {
        case 1:
            slideshow.classList.remove("slide1");
            text.innerText = "Кредит на выгодных\nусловиях";

            slideshow.classList.add("slide2");
            count++;
            break;
        case 2:
            slideshow.classList.remove("slide2");
            text.innerText = "Отзывы реальных\n покупателей";
            slideshow.classList.add("slide3");
            count++;
            break;
        default:
            slideshow.classList.remove("slide3");
            text.innerText = "Продажа авто\nс пробегом";
            slideshow.classList.add("slide1");
            count = 1;
            break;
    }
}
