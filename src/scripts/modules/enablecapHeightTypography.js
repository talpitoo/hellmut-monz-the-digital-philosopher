/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * enable 'cap height' typography <html class="cap-height-adjust">
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeCapHeightTypography() {
  var root = document.documentElement;
  // get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // check if the "debug" parameter is present
  if (urlParams.has('capHeight')) {
    // add the "cap-height-adjust" class to the <html> tag
    root.classList.add('cap-height-adjust');
  }
}