import '../styles/main.css';
import { Dropdown } from 'flowbite';
import { initializeMobileMenu } from './modules/hamburger';
// import { handleDropdownClick } from './modules/topNavbarDropdown';
import { initializeFullscreen } from './modules/fullscreen';
import { initializeNewsletterAnimation } from './modules/newsletterAnimation';
import { initializeSwiper } from './modules/swiperInstances';

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM loaded");

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {
        initializeMobileMenu();
        // handleDropdownClick();
        initializeFullscreen();
        initializeNewsletterAnimation();
        initializeSwiper();

        console.debug("window loaded");
    }, false);
});