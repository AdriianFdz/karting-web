document.addEventListener('DOMContentLoaded', function() {
    const nuestroCircuito = document.getElementById('nuestroCircuito');
    const nav = document.querySelector('nav');
    downArrow.addEventListener('click', function() {
        const posicion = nuestroCircuito.getBoundingClientRect().top + window.scrollY;
        const navHeight = nav.offsetHeight;
        window.scrollTo({
            top: posicion - navHeight - parseInt("30px", 10),
            behavior: 'smooth'
        });
    });

});