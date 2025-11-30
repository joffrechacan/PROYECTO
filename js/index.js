document.addEventListener("DOMContentLoaded", () => {
    fetch("data/ropa.json") 
        .then(response => response.json())
        .then(data => {

            let productos = data.productos; 
            let contenido = "";

            productos.forEach(prod => {
                contenido += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${prod.nombre}</h5>
                            <p class="text-muted" style="font-size: 0.9rem;">${prod.descripcion}</p>
                            <p class="card-text fw-bold">$${prod.precio.toFixed(2)}</p>
                            <a href="#" class="btn btn-dark w-100">Ver más</a>
                        </div>
                    </div>
                </div>`;
            });

            document.getElementById("contenedorRopa").innerHTML = contenido;
        })
        .catch(error => console.error("Error al cargar ropa.json:", error));
});
