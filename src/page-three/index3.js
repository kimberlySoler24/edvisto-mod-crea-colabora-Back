//Código estructurado en lenguaje de programación JAVASCRIPT que utiliza el navegador web para interactuar con una página web.

document.getElementById("form-history").addEventListener("submit", async(event) => { //en esta sección se selecciona un elemento del HTML con el ID denominado form-history del formulario definido y agrega un escuchador de eventos, el cual estará atento a cuando ese formulario sea enviado 'submit'. Cueando eso sucede, se ejecutará la función proporcionada como segundo argumento, en este caso la función asíncrona con parámetro definido 'event'.
    event.preventDefault(); // Por defecto, una página HTML se recarga cuando se efectúa el envío respectivo por medio del botón, esta línea de código evita que la página se recargue.
    console.log(event); // muestra en la consola el objeto 'event'. Este objeto contiene información sobre el evento que ha icurrido, en este caso, el envío del formulario.

    const respuesta = await fetch("http://localhost:3000/api/informacion-pagina3", { //fetch permite realizar comunicación con el bakcend, donde hacer una solicitud a la URL definida.
        method:"POST", //Se específica que la solicitud es de tipo POST, que es uno de los métodos HTTP utilizados para enviar datos al servidor.
        headers:{ // Se establece el encabezado de la solicitud HTTP para indicar que se está enviando datos en formato JSON.
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // Corresponde al cuerpo de la solicitud donde se definen los datos del objeto event que se enviarán al servidor. Estos datos los convierte en una cadena de texto JSON.
            think: event.target.children.think.value,
            information: event.target.children.information.value
        })
    });

});