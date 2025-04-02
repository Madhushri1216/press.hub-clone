// Get the hamburger icon and the menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuList = document.querySelector('.menuList');

// Toggle the menu when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});
