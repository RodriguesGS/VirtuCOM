import initModal from './modules/modal.js';
import register from './modules/register.js';
import login from './modules/login.js';
import initSlider from './modules/slider.js';
import loadItems from './user.js';

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initSlider();
    loadItems();
    
    const registerForm = document.querySelector("#registerModal form");
    registerForm.addEventListener("submit", register);

    const loginForm = document.querySelector('#loginModal form');
    loginForm.addEventListener("submit", login);
});
