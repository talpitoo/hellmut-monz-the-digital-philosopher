import '../styles/main.css';
import { Dropdown } from 'flowbite';
import { initializeMobileMenu } from './modules/hamburger';
import { initializeFullscreen } from './modules/fullscreen';
// import { initializeNewsletterAnimation } from './modules/newsletterAnimation';
import { initializeNewsbarReveal } from './modules/topNavbarNewsBarReveal';
import { initializeFooterReveal } from './modules/footerReveal';
import { initializeSwiper } from './modules/swiperInstances';

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM loaded");

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {
        initializeMobileMenu();
        initializeFullscreen();
        // initializeNewsletterAnimation();
        initializeFooterReveal();
        initializeNewsbarReveal();
        initializeSwiper();

        console.debug("window loaded");
    }, false);
});