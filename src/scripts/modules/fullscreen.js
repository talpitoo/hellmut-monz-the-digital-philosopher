/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * full screen toggle
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeFullscreen() {
    var root = document.documentElement;
    var toggleFullscreenButtons = document.querySelectorAll('[data-btn-fullscreen]');

    if (toggleFullscreenButtons.length > 0) {
        toggleFullscreenButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                root.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full screen: ${err.message}`);
                });
            });
        });
    }

    // NOTE: in case we have a button: document.exitFullscreen();
}