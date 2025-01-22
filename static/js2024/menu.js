const Menu = document.querySelector('.navbar .menu');
const Navlinks = document.querySelector('.nav-links');


Menu.addEventListener('click', () => {
    Navlinks.classList.toggle('activate');
});
