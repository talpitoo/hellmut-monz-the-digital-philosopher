/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * grid debug overlay when <html class="debug">
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeOverlayDebugGrid() {
  var root = document.documentElement;
  // get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // check if the "debug" parameter is present
  if (urlParams.has('debug')) {
    // add the "debug" class to the <html> tag
    root.classList.add('debug');
  }
}