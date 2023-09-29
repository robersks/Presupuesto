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
            const { id, valor, opcion } = registro; // Extraer los valores de cada registro
            const fila = `
                <tr>
                    <td>${id}</td>
                    <td>${valor}</td>
                    <td>${opcion}</td>
                </tr>
            `;
            tablaBody.innerHTML += fila; // Agrega la fila a la tabla
        });
    })
    .catch(err => console.error(err));  



// enviar a la api

const formulario = document.querySelector("#registroFormulario");
formulario.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let fila = Object.fromEntries(new FormData(e.target));
    let config = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(fila)
    };
    let resp = await (await fetch(url, config)).json();
    location.reload();
});




