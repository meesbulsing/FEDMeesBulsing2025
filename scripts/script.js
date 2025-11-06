// JavaScript Document
console.log("hi");

const openbutton = document.querySelector("nav button");
const menu = document.querySelector(".offscreenmenu");
const sluitbutton = document.querySelector(".offscreenmenu button");

openbutton.addEventListener("click", function() {
    menu.classList.toggle("open");
});

sluitbutton.addEventListener("click", function() {
    menu.classList.toggle("open");
});