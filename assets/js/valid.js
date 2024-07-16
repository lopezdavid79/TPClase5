document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('personal-data-form');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío inmediato del formulario

        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const fechaNacimiento = document.getElementById('fechaNacimiento');
        const paisResidencia = document.getElementById('paisResidencia');

        let valid = true;

        // Validaciones
        if (!/^[a-zA-Z ]+$/.test(nombre.value)) {
            nombre.classList.add('is-invalid');
            nombre.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            nombre.classList.remove('is-invalid');
        }

        if (!/^[a-zA-Z ]+$/.test(apellido.value)) {
            apellido.classList.add('is-invalid');
            apellido.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            apellido.classList.remove('is-invalid');
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.value)) {
            email.classList.add('is-invalid');
            email.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        const fechaNacimientoUsuario = new Date(fechaNacimiento.value);
        const fechaNacimientoMin = new Date();
        fechaNacimientoMin.setFullYear(fechaNacimientoMin.getFullYear() - 18);

        if (fechaNacimientoUsuario > fechaNacimientoMin) {
            fechaNacimiento.classList.add('is-invalid');
            fechaNacimiento.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            fechaNacimiento.classList.remove('is-invalid');
        }

        if (paisResidencia.value.trim() === '') {
            paisResidencia.classList.add('is-invalid');
            paisResidencia.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            paisResidencia.classList.remove('is-invalid');
        }

        // Si todas las validaciones son correctas, se permite el envío del formulario
        if (valid) {
            formulario.submit();
        }
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
