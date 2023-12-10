

document.addEventListener("DOMContentLoaded", function() {

    generarHistoria();

});




// Verificar si hay un ID almacenado en Local Storage
async function generarHistoria() {
    let titulo = document.getElementById("camino-title");
    let narrativa = document.getElementById("camino-story");
    const mongoId = localStorage.getItem('mongoId');
    console.log(mongoId);
    if (mongoId) {
        try {
            const openAIResponse = await fetch(`/api/informacion-historia/${mongoId}`, {
                method: 'GET',
            });

            const openAIResult = await openAIResponse.json();

        
            titulo.innerHTML = openAIResult.title;
            narrativa.innerHTML = openAIResult.responseAI;

            // Mostrar la historia en la consola
            console.log('Historia generada:', openAIResult);
        } catch (error) {
            console.error('Error al generar la historia:', error);
        }
    } else {
        console.error('No se encontró un ID en Local Storage. Primero, guarda la información en MongoDB.');
    }
}