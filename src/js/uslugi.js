const dropdown = document.querySelector('#dropdown');
const sublist = document.querySelector('#sublist');

const sublistItems = document.querySelectorAll('.menu-sublist-item');
let memorySublistItem = document.querySelector('.menu-sublist-item.active');

const menuListItems = document.querySelectorAll('.menu-list-item');
let memorylistItem = document.querySelector('.menu-list-item.active');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-open');
    sublist.classList.toggle('active');
})



const menuBtn = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});