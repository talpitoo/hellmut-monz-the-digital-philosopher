/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * full screen toggle
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeFullscreen() {
    var root = document.documentElement;
    var toggleFullscreen = document.getElementById('btn-fullscreen');
    if (toggleFullscreen) {
        toggleFullscreen.addEventListener('click', function () {
            root.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full screen: ${err.message}`);
            });
        });
    }
    // NOTE: in case we have a button: document.exitFullscreen();
}
