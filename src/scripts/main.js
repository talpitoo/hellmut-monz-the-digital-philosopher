import '../styles/main.css';
import 'flowbite';
import { Dropdown } from 'flowbite';
// import Swiper from 'swiper/bundle'; // import Swiper bundle with all modules installed
// import 'swiper/css/bundle'; // import styles bundle

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM loaded");

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {

        /**
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * hamburger
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         */
        var root = document.documentElement;
        var burgerMenu = document.getElementById('burger-menu');
        if (burgerMenu) {
            burgerMenu.addEventListener('click', function () {
                root.classList.toggle("mobile-menu-expanded");
            });
        }



        /**
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * full-screen
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         */
        var toggleFullscreen = document.getElementById('btn-fullscreen');
        if (toggleFullscreen) {
            toggleFullscreen.addEventListener('click', function () {
                root.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full screen: ${err.message}`);
                });
                // NOTE: in case we have a button: document.exitFullscreen();
            });
        }



        /**
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * swiper instances
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         */
        // const swiper = new Swiper("#swiper-reservations", {
        //     slidesPerView: 1,
        //     loop: true,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },
        //     breakpoints: {
        //         0: {
        //             navigation: {
        //                 enabled: false,
        //             },
        //         },
        //         1024: {
        //             navigation: {
        //                 enabled: true,
        //                 nextEl: "[data-swiper-button-prev]",
        //                 prevEl: "[data-swiper-button-next]",
        //             },
        //         }
        //     },
        // });



        console.debug("window loaded");
    }, false);
});
