/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * fade in the newsletter once scrolled into view, using GSAP https://gsap.com/docs/v3/Plugins/ScrollTrigger/
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
// // import GSAP and its plugins, then register them
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export function initializeNewsletterAnimation() {
//     // set initial state (hidden)
//     gsap.set('#newsletter-wrapper [data-animation="true"]', {
//         opacity: 0.01,
//         xPercent: -50,
//     });

//     // animate to visible state
//     gsap.to('#newsletter-wrapper [data-animation="true"]', {
//         scrollTrigger: {
//             trigger: "footer",
//             end: "top center", // end the animation when the top of the footer reaches the center of the viewport
//             scrub: 2, // smoothly animate the opacity as you scroll
//         },
//         stagger: 0.1,
//         opacity: 1,
//         xPercent: 0,
//     });
// }
