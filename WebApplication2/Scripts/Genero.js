
function Submit(){

    let input = document.querySelector("#tipo").value;

    let datos = {
        tipo: input
    };

    let parametros = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(datos)
    };

    fetch('./create', parametros)
        .then(response => response.json())
        .then(data => {
            const section = document.querySelector("#msg");

            if (data.codigo === "200") {
                section.innerHTML = "<h1>El Genero fue creado correctamente </h1>";
            }
            else {
                section.innerHTML = "<h1>Vuelva a intentarlo</h1>";
            }

        })
        .catch(error => console.error('Error:', error));      




}