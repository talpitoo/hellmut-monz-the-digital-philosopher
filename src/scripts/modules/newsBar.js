/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * newsbar & sessionStorage
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeNewsBarSessionStorage() {
  var root = document.documentElement;

  // Check if the link was previously clicked
  if (sessionStorage.getItem('newsLinkClicked')) {
    root.classList.add('newsbar-hidden');
  }

  // Function to handle link click
  function handleLinkClick(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Store in sessionStorage that the link was clicked
    sessionStorage.setItem('newsLinkClicked', true);
    root.classList.add('newsbar-hidden');

    // Redirect to the link
    window.location.href = event.target.href;
  }

  const newsLink = document.querySelector('.monz-newsbar a');
  if (newsLink) {
    newsLink.addEventListener('click', handleLinkClick);
  }

}