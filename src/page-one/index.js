document.getElementById("form-history").addEventListener("submit", async(event) => { //permite obtener los valores registrados en el formulario
    event.preventDefault(); //previene lo que hace por defecto el enviar un formulario
    console.log(event);

    const respuesta = await fetch("http://localhost:3000/api/informacion-pagina1", { //fetch permite realizar comunicación con el bakcend
        method:"POST", //crea el formato json de lo que se quiere obtener desde los formularios con el metodo POST
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idea: event.target.children.idea.value,
            project: event.target.children.project.value,
        })
    });

});


