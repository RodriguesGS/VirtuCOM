import initModal from "./modules/modal.js";
import register from "./modules/register.js";
import login from "./modules/login.js";
import initSlider from "./modules/slider.js";
import loadItems from "./user.js";
import { initCart } from "./modules/cart.js";

document.addEventListener('DOMContentLoaded', () => {
    loadItems();
    initModal();
    initSlider();
    initCart();
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
