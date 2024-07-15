document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('personal-data-form');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío inmediato del formulario

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const paisResidencia = document.getElementById('paisResidencia').value;

        // Validaciones
        if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellido)) {
            alert('Nombre y apellido deben contener solo letras y espacios.');
            return;
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
            alert('Correo electrónico inválido. Debe seguir el formato: nombre@dominio.com');
            return;
        }

        const fechaNacimientoUsuario = new Date(fechaNacimiento);
        const fechaNacimientoMin = new Date();
        fechaNacimientoMin.setFullYear(fechaNacimientoMin.getFullYear() - 18);

        if (fechaNacimientoUsuario > fechaNacimientoMin) {
            alert('Debes tener al menos 18 años para enviar el formulario.');
            return;
        }

        if (paisResidencia.trim() === '') {
            alert('Por favor, ingrese su país de residencia.');
            return;
        }

        // Si todas las validaciones son correctas, se permite el envío del formulario
        formulario.submit();
    });

    // Funciones de cambio de estilo
    window.toggleContrast = function() {
        document.getElementById('high-contrast-style').disabled = false;
        document.getElementById('btn-normal').style.display = 'inline';
    }

    window.toggleNormal = function() {
        document.getElementById('high-contrast-style').disabled = true;
        document.getElementById('btn-normal').style.display = 'none';
    }
});
