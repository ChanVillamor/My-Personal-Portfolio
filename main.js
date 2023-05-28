const menuitems = document.querySelector('.menu-items');
const links = sidebar.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
});