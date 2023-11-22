/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = formulario.elements.nombre.value;
        const email = formulario.elements.email.value;
        const telefono = formulario.elements.telefono.value;
        const mensaje = formulario.elements.mensaje.value;

        // Aquí puedes agregar la lógica para enviar el mensaje a tu dirección de correo electrónico
        // Puedes utilizar servicios de correo electrónico como Email.js o configurar un servidor Node.js para enviar el correo.
        // A continuación, se muestra un ejemplo simple usando Email.js:

        emailjs.send("default_service", "template_id", {
            from_name: nombre,
            from_email: email,
            from_telefono: telefono,
            message: mensaje,
        })
        .then(function(response) {
            alert("Mensaje enviado con éxito");
            formulario.reset();
        }, function(error) {
            alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        });
    });
});

