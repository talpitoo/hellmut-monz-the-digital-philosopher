/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * swiper instances, https://swiperjs.com/get-started
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
// import Swiper from 'swiper/bundle'; // import Swiper bundle with all modules installed
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css/bundle'; // import styles bundle
// import 'swiper/css';
// import 'swiper/css/navigation';

export function initializeSwiper() {
    var exampleSwiper = document.getElementById('monz-swiper');
    if (exampleSwiper) {
        const swiper = new Swiper(exampleSwiper, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                }
            },
        })
    }
}
