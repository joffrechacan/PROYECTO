document.addEventListener("DOMContentLoaded", () => {
    
    //Datos
    fetch("data/contacto.json")
        .then(response => response.json())
        .then(data => {
            const info = data.tienda;

            document.getElementById("infoTienda").innerHTML = `
                <h3>${info.nombre}</h3>
                <p><strong>Dirección:</strong> ${info.direccion}</p>
                <p><strong>Teléfono:</strong> ${info.telefono}</p>
                <p><strong>Email:</strong> ${info.email}</p>
            `;

            // Dirección del JSON
            document.getElementById("mapa").src =
                `https://www.google.com/maps?q=${info.lat},${info.lng}&hl=es&z=16&output=embed`;
        })
        .catch(error => console.error("Error al cargar contacto.json:", error));



    // Formulario 
    const form = document.getElementById("formContacto");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Correo electrónico no válido");
            return;
        }

        alert("¡Mensaje enviado correctamente!");
        form.reset();
    });

});