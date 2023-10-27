document.getElementById("form-history").addEventListener("submit", async(event) => {
    event.preventDefault(); //previene lo que hace por defecto el enviar un formulario
    console.log(event);

    const respuesta = await fetch("http://localhost:3000/api/informacion-pagina2", { //fetch permite realizar comunicación con el bakcend
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            interest: event.target.children.interest.value,
            knowledge: event.target.children.knowledge.value
        })
    });

});
