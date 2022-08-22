'use-strict';

const hamburgir = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

hamburgir.addEventListener ( 
    'click' , function() {
        navbarLinks.classList.toggle('active');
        document.querySelector(".caption").classList.toggle('hidden');
        document.querySelector(".hamburger").classList.toggle('hidden');
        document.querySelector(".hamburger-cross").classList.toggle('hidden');      
    }
)