let mainNav = document.getElementById('mobile-nav-menu');
let navBarToggle = document.getElementById('nav-toggle');
const hamburgerIcon = '☰';
const xIcon = '×';

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('open');

    if (navBarToggle.innerHTML === hamburgerIcon) {
        navBarToggle.innerHTML = xIcon;
    }
    else {
        navBarToggle.innerHTML = hamburgerIcon;
    };
});