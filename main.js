'use strict';


const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const topBtn = document.querySelector('.btn-top');


const element = function(elem){
    elem.classList.toggle('active');
}

const menuElements = [menuBtn, closeBtn, overlay];

for(let i = 0; i < menuElements.length; i++){
    menuElements[i].addEventListener("click", ()=>{
        element(menu);
        element(overlay);
        element(document.body);
    });
}

function linkActive(){
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

menuLinks.forEach(e=>e.addEventListener("click", linkActive));


window.addEventListener("scroll", ()=>{
    if(this.window.scrollY>=300){
        header.classList.add("active");
        topBtn.classList.add("active");
    }
    else{
        header.classList.remove("active");
        topBtn.classList.remove("active");
    }
});