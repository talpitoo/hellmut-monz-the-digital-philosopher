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
         * fade in the newsletter once scrolled into view, using GSAP https://gsap.com/docs/v3/Plugins/ScrollTrigger/
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         */
        // set initial state (hidden)
        gsap.set('#newsletter-wrapper [data-animation="true"]', {
            opacity: 0.01,
            xPercent: -50,
        });

        // animate to visible state
        gsap.to('#newsletter-wrapper [data-animation="true"]', {
            scrollTrigger: {
                trigger: "footer",
                end: "top center", // end the animation when the top of the footer reaches the center of the viewport
                scrub: 2, // smoothly animate the opacity as you scroll
            },
            stagger: 0.1,
            opacity: 1,
            xPercent: 0,
        });



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
