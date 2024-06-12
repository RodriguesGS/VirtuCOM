import initModal from "./modules/modal.js";
import register from "./modules/register.js";
import login from "./modules/login.js";
import initSlider from "./modules/slider.js";
import loadItems from "./user.js";

document.addEventListener('DOMContentLoaded', loadItems);

initModal();

initSlider();

const registerForm = document.querySelector("#registerModal form");
registerForm.addEventListener("submit", register);

const loginForm = document.querySelector('#loginModal form');
loginForm.addEventListener("submit", login);

document.addEventListener('DOMContentLoaded', function() {
    const dropdownCategories = document.querySelector('.dropDown');
    const dropdownContent = document.querySelector('.dropdown-content-categories');

    dropdownCategories.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    dropdownCategories.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });
});

document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.drop-user .dropdown-content');
    if (!dropdown.contains(e.target) && !document.querySelector('.drop-user').contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

document.querySelector('.drop-user').addEventListener('click', function() {
    const dropdown = document.querySelector('.drop-user .dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

