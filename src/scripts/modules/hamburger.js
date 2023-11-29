/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * hamburger
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeMobileMenu() {
  var root = document.documentElement;
  var burgerMenu = document.getElementById('burger-menu');
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
      root.classList.remove("footer-expanded"); // NOTE: collapse the footer if it was expanded
      root.classList.toggle("mobile-menu-expanded");
    });
  }
}