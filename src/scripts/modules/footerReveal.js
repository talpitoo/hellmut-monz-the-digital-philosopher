/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * reveal the footer, using GSAP https://gsap.com/docs/v3/Plugins/ScrollTrigger/
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
// import GSAP and its plugins, then register them
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initializeFooterReveal() {
    // NOTE: documentation at https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ and maybe https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.addEventListener()/
    let mm = gsap.matchMedia(),
        breakPoint = 1024;

    mm.add({
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
        isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
    }, (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        gsap.to('footer', {
            scrollTrigger: {
                trigger: "html",
                start: "bottom bottom+=1", // start the animation when the bottom of the trigger element reaches the bottom of the viewport
                toggleActions: "play reverse play reverse", // play the animation forward when entering the trigger, and in reverse when leaving
                toggleClass: 'footer-expanded',
            },
        });

        if (isMobile) {
            var root = document.documentElement;
            const footerButton = document.getElementById('footer-reveal');

            if (footerButton) {
                footerButton.addEventListener('click', function () {
                    root.classList.toggle("footer-expanded");
                });
            }
        }

        return () => {
            // optionally return a cleanup function that will be called when the media query no longer matches
        }
    });

}