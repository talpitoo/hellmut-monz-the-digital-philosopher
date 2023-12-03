import '../styles/main.css';
import { Dropdown } from 'flowbite';
import { initializeMobileMenu } from './modules/hamburger';
import { initializeOverlayDebugGrid } from './modules/grid-debug-overlay';
import { initializeFullscreen } from './modules/fullscreen';
import { initializeFooterReveal } from './modules/footerReveal';
import { initializeSwiper } from './modules/swiperInstances';
import { initializeNewsBarSessionStorage } from './modules/newsBar';
// NOTE: not used but kept for code reference
// import { initializeNewsletterAnimation } from './modules/newsletterAnimation';
// import { initializeNewsbarReveal } from './modules/topNavbarNewsBarReveal';

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM loaded");

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {
        initializeMobileMenu();
        initializeOverlayDebugGrid();
        initializeFullscreen();
        initializeFooterReveal();
        initializeSwiper();
        initializeNewsBarSessionStorage();

        // NOTE: not used but kept for code reference
        // initializeNewsletterAnimation();
        // initializeNewsbarReveal();

        console.debug("window loaded");
    }, false);
});