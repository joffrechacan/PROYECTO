document.addEventListener("DOMContentLoaded", () => {

    fetch("data/dashboard.json")
        .then(res => res.json())
        .then(data => {

            // Datos desde JSON
            const ventasMensuales = data.ventasMensuales;
            const meses = data.meses;
            const ingresosPorProducto = data.ingresosPorProducto;
            const ventasCategorias = data.ventasCategorias;

    
            const totalVentas = ventasMensuales.reduce((a, b) => a + b, 0);
            document.getElementById("kpiTotal").innerText = "$" + totalVentas;

            const mejorMesIndex = ventasMensuales.indexOf(Math.max(...ventasMensuales));
            document.getElementById("kpiMejorMes").innerText = meses[mejorMesIndex];

            const ticketPromedio = totalVentas / 12;
            document.getElementById("kpiPromedio").innerText = "$" + ticketPromedio.toFixed(2);

            const totalProductos = Object.values(ingresosPorProducto).length * 50;
            document.getElementById("kpiProductos").innerText = totalProductos;

  
            new Chart(document.getElementById("chartLine"), {
                type: "line",
                data: {
                    labels: meses,
                    datasets: [{
                        label: "Ventas ($)",
                        data: ventasMensuales,
                        borderWidth: 3
                    }]
                }
            });

    
            new Chart(document.getElementById("chartBar"), {
                type: "bar",
                data: {
                    labels: Object.keys(ingresosPorProducto),
                    datasets: [{
                        label: "Ingresos ($)",
                        data: Object.values(ingresosPorProducto),
                        borderWidth: 2
                    }]
                }
            });


            new Chart(document.getElementById("chartPie"), {
                type: "pie",
                data: {
                    labels: Object.keys(ventasCategorias),
                    datasets: [{
                        data: Object.values(ventasCategorias)
                    }]
                }
            });

     
            new Chart(document.getElementById("chartRadar"), {
                type: "radar",
                data: {
                    labels: meses,
                    datasets: [{
                        label: "Comparativa",
                        data: ventasMensuales
                    }]
                }
            });

        })
        .catch(error => console.error("Error cargando JSON:", error));

});
