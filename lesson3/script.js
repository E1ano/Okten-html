'use strict';

const burger = document.querySelector('.header__burger-menu');

burger.addEventListener('click', (e) => {
    e.preventDefault();

    burger.classList.toggle('active');
});