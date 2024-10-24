document.addEventListener('DOMContentLoaded', function() {
    var navBar = document.querySelector('nav');
    if (window.location.pathname.endsWith('index.html')) {
        document.addEventListener('scroll', function () {
            navBar = document.querySelector('nav');
            if (navBar) {
                navBar.classList.toggle('fixed-top', window.scrollY > 0);
            }
        });
    } else if (navBar) {
        navBar.classList.add('fixed-top');
    }
});
