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
      root.classList.toggle("mobile-menu-expanded");
    });
  }
}