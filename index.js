// referencia a tbody de la tabla
const tablaBody = document.querySelector('#tablaBody');

// URL del API
const url = 'https://650cf20447af3fd22f681060.mockapi.io/registro/registros';


// leer la tabla del API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Recorre los datos y agrega cada registro a la tabla
        data.forEach(registro => {
            const { id, valor, tipo } = registro; // Extraer los valores de cada registro
            const fila = `
                <tr>
                    <td>${id}</td>
                    <td>${valor}</td>
                    <td>${tipo}</td>
                </tr>
            `;
            tablaBody.innerHTML += fila; // Agrega la fila a la tabla
        });
    })
    .catch(err => console.error(err));