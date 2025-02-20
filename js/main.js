// Función para mostrar u ocultar el menú en pantallas pequeñas
const iconoNav = document.getElementById('icono-nav');
const nav = document.querySelector('nav');

iconoNav.addEventListener('click', function() {
    nav.classList.toggle('responsive');
});

// Ejemplo con ScrollReveal para revelar secciones al hacer scroll
ScrollReveal().reveal('#sobremi', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('#servicios', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400
});

// Función para detectar si un elemento es visible en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animar las barras de progreso cuando son visibles
window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.barra-progreso1, .barra-progreso2, .barra-progreso3, .barra-progreso4');
    skillBars.forEach(function(bar) {
        if (isElementInViewport(bar)) {
            bar.style.width = bar.getAttribute('data-width'); // Aquí deberías usar un atributo data para asignar el ancho final
        }
    });
});

// Validar formulario de contacto
const form = document.querySelector('#contacto form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe automáticamente
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    
    if (nombre === '' || email === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Formulario enviado con éxito!');
        form.submit();  // Ahora se puede enviar el formulario
    }
});

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(function(opcion) {
        opcion.classList.remove('seleccionado'); // Quita la clase 'seleccionado'
    });
    link.classList.add('seleccionado'); // Aplica la clase 'seleccionado' solo a la opción seleccionada
}

function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive"); // Alterna entre agregar o quitar la clase 'responsive'
}

window.onscroll = function() { efectoHabilidades() };

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        var barras = document.querySelectorAll('.barra');
        barras.forEach(function(barra) {
            let width = barra.getAttribute('data-width');
            barra.style.width = width; // Asigna el ancho desde el atributo data-width
        });
    }
}


document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card', {delay: 500});
ScrollReveal().reveal('.card-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


// scripts de steelfira9239


function scrollLeft() {
    document.getElementById('videoSection').scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('videoSection').scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
}



