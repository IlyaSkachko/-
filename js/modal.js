"use strict";

const form = document.querySelector(".call-form");

const btn_open = document.querySelector(".call-button");

const btn_hide = document.querySelector(".send-call");

const wrapper = document.querySelector('.wrapper');


btn_open.addEventListener("click", () => {
    form.classList.remove("hide");
    form.classList.add("show");
    wrapper.style.opacity = "30%";
    document.body.style.backgroundColor = "#000";
});
btn_hide.addEventListener("click", () => {
    form.classList.remove("show");
    wrapper.style.opacity = "100%";
    document.body.style.backgroundColor = "#fff";
    form.classList.add("hide");
});
