/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * course TOC toggle
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeCourseTOC() {
    var root = document.documentElement;
    var courseContentMenu = document.getElementById('course-content-menu');

    if (courseContentMenu) {
        courseContentMenu.addEventListener('click', function () {
            root.classList.toggle('course-toc-expanded');
        });
    }

    // NOTE: in case we have a button: document.exitFullscreen();
}