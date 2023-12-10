
//ventana modal que redirige a busqueda
const open = document.getElementById ('open');
const modal_container = document.getElementById ('modal_container');
const close = document.getElementById ('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

//ventana modal que envia a la historia
const open2 = document.getElementById ('open2');
const modal_container2 = document.getElementById ('modal_container2');
const close2 = document.getElementById ('close2');

open2.addEventListener('click', (event) => {
    event.preventDefault();
    modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
});

//ruta de las img
const imageOnPath = "../../imagenes/voice-on.png";
const imageOffPath = "../../imagenes/voice-off.png";

// Variable para indicar si el reconocimiento está activado
let recognitionActiveTitle = false;
let recognitionTitle;
let recognitionActiveSuceso = false;
let recognitionSuceso;
let recognitionActiveResolver = false;
let recognitionResolver;
let recognitionActiveIdea = false;
let recognitionIdea;
let recognitionActiveSolucion = false;
let recognitionSolucion;



// Función para iniciar o detener el reconocimiento al hacer clic en el botón
const toggleRecognitionTitle = () => {
   const voiceButton = document.getElementById("voice-title-image");
    if (recognitionActiveTitle) {
        recognitionTitle.stop();
        voiceButton.setAttribute ('src', imageOffPath)

    } else {
        recognitionTitle.start();
        voiceButton.setAttribute ('src', imageOnPath)
    }
    recognitionActiveTitle = !recognitionActiveTitle;
};

const toggleRecognitionSuceso = () => {
    const voiceButton = document.getElementById("voice-suceso-image");
     if (recognitionActiveSuceso) {
         recognitionSuceso.stop();
         voiceButton.setAttribute ('src', imageOffPath)
 
     } else {
         recognitionSuceso.start();
         voiceButton.setAttribute ('src', imageOnPath)
     }
     recognitionActiveSuceso = !recognitionActiveSuceso;
 };

const toggleRecognitionResolver = () => {
const voiceButton = document.getElementById("voice-resolver-image");
    if (recognitionActiveResolver) {
        recognitionResolver.stop();
        voiceButton.setAttribute ('src', imageOffPath)

    } else {
        recognitionResolver.start();
        voiceButton.setAttribute ('src', imageOnPath)
    }
    recognitionActiveResolver = !recognitionActiveResolver;
};

const toggleRecognitionIdea = () => {
    const voiceButton = document.getElementById("voice-idea-image");
     if (recognitionActiveIdea) {
         recognitionIdea.stop();
         voiceButton.setAttribute ('src', imageOffPath)
 
     } else {
         recognitionIdea.start();
         voiceButton.setAttribute ('src', imageOnPath)
     }
     recognitionActiveIdea = !recognitionActiveIdea;
 };
 
const toggleRecognitionSolucion = () => {
const voiceButton = document.getElementById("voice-solucion-image");
    if (recognitionActiveSolucion) {
        recognitionSolucion.stop();
        voiceButton.setAttribute ('src', imageOffPath)

    } else {
        recognitionSolucion.start();
        voiceButton.setAttribute ('src', imageOnPath)
    }
    recognitionActiveSolucion = !recognitionActiveSolucion;
};
 

// Función para verificar si el navegador es compatible
const elNavegadorEsCompatible = () => {
    if (navigator.userAgent.indexOf("Chrome") !== -1 ||  
        navigator.userAgent.indexOf("Edge") !== -1 ||  
        navigator.userAgent.indexOf("Safari") !== -1) {
        return true;
    }
    alert('El Navegador no es compatible con el Reconocimiento de voz');
    return false;
};



document.addEventListener("DOMContentLoaded", function() {
    
// Si el navegador es compatible, configurar el reconocimiento de voz para el título
if (elNavegadorEsCompatible()) {
    recognitionTitle = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
        window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognitionTitle.lang = "es-US";
        
        recognitionTitle.onend = (event) => { 
            if (recognitionActiveTitle) {
                recognitionTitle.start(); 
            }
        };
        
        recognitionTitle.onresult = (resultado) => { manejarResultadoTitle(resultado); }; 
        
        document.getElementById("voice-title").addEventListener("click", toggleRecognitionTitle);
    }
    
// Si el navegador es compatible, configurar el reconocimiento de voz para el suceso
if (elNavegadorEsCompatible()) {
    recognitionSuceso = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
        window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognitionSuceso.lang = "es-US";
        
        recognitionSuceso.onend = (event) => { 
            if (recognitionActiveSuceso) {
                recognitionSuceso.start(); 
            }
        };
        
        recognitionSuceso.onresult = (resultado) => { manejarResultadoSuceso(resultado); }; 
        
        document.getElementById("voice-suceso").addEventListener("click", toggleRecognitionSuceso);
    }

// Si el navegador es compatible, configurar el reconocimiento de voz para resolver
if (elNavegadorEsCompatible()) {
    recognitionResolver = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
        window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognitionResolver.lang = "es-US";
        
        recognitionResolver.onend = (event) => { 
            if (recognitionActiveResolver) {
                recognitionResolver.start(); 
            }
        };
        
        recognitionResolver.onresult = (resultado) => { manejarResultadoResolver(resultado); }; 
        
        document.getElementById("voice-resolver").addEventListener("click", toggleRecognitionResolver);
    }

// Si el navegador es compatible, configurar el reconocimiento de voz para idea
if (elNavegadorEsCompatible()) {
    recognitionIdea = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
        window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognitionIdea.lang = "es-US";
        
        recognitionIdea.onend = (event) => { 
            if (recognitionActiveIdea) {
                recognitionIdea.start(); 
            }
        };
        
        recognitionIdea.onresult = (resultado) => { manejarResultadoIdea(resultado); }; 
        
        document.getElementById("voice-idea").addEventListener("click", toggleRecognitionIdea);
    }

// Si el navegador es compatible, configurar el reconocimiento de voz para solucion
if (elNavegadorEsCompatible()) {
    recognitionSolucion = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
        window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognitionSolucion.lang = "es-US";
        
        recognitionSolucion.onend = (event) => { 
            if (recognitionActiveSolucion) {
                recognitionSolucion.start(); 
            }
        };
        
        recognitionSolucion.onresult = (resultado) => { manejarResultadoSolucion(resultado); }; 
        
        document.getElementById("voice-solucion").addEventListener("click", toggleRecognitionSolucion);
    }


});

// Función que maneja el resultado del reconocimiento de voz para el título
const manejarResultadoTitle = resultado => {
    updateCounter("title", resultado.results[0][0].transcript);
};
  
// Función que maneja el resultado del reconocimiento de voz para el suceso
const manejarResultadoSuceso = resultado => {
    updateCounter("suceso", resultado.results[0][0].transcript);
};

// Función que maneja el resultado del reconocimiento de voz para resolver
const manejarResultadoResolver = resultado => {
    updateCounter("resolver", resultado.results[0][0].transcript);
};

// Función que maneja el resultado del reconocimiento de voz para idea
const manejarResultadoIdea = resultado => {
    updateCounter("idea", resultado.results[0][0].transcript);
};

// Función que maneja el resultado del reconocimiento de voz para solucion
const manejarResultadoSolucion = resultado => {
    updateCounter("solucion", resultado.results[0][0].transcript);
};


//funcion que activa los contadores
const updateCounter = (elementId, value) => {
const inputElement = document.getElementById(elementId);
const counterElement = document.getElementById(`${elementId}-length`);
inputElement.value = value;
const inputLength = value.length;
counterElement.innerText = `${inputLength}/200`;
};

//Funcion para obtener todas las opciones seleccionadas como una lista

const getSelectedCheckboxes = (containerId) => {
    const checkboxes = document.querySelectorAll(`#${containerId} .checkbox-vida:checked`);
    const selectedValues = Array.from(checkboxes).map(checkbox => {
        return checkbox.nextElementSibling.textContent.trim();
    });
    return selectedValues;
};

// Llamado de API para guardar información.
document.getElementById("formato").addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const respuesta = await fetch("http://localhost:3000/api/informacion-historia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: event.target.querySelector('#title').value,
                vida: getSelectedCheckboxes('vida-container'),
                suceso: event.target.querySelector('#suceso').value,
                resolver: event.target.querySelector('#resolver').value,
                idea: event.target.querySelector('#idea').value,
                solucion: event.target.querySelector('#solucion').value,
            }),
        });

        const responseData = await respuesta.json();
        console.log(responseData);

        // Obtener el _id de la respuesta y guardarlo en Local Storage
        const idFromMongoDB = responseData.id;
        localStorage.setItem('mongoId', idFromMongoDB);

        // Redirigir inmediatamente después de guardar el ID
        window.location.href = "http://localhost:3000/narrativa";

    } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
    }
});


// // Verificar si hay un ID almacenado en Local Storage
// async function generarHistoria() {
    
//     const mongoId = localStorage.getItem('mongoId');
//     console.log(mongoId);
//     if (mongoId) {
//         try {
//             const openAIResponse = await fetch(`/api/informacion-historia/${mongoId}`, {
//                 method: 'GET',
//             });

//             const openAIResult = await openAIResponse.json();

//             // Mostrar la historia en la consola
//             console.log('Historia generada:', openAIResult);
//         } catch (error) {
//             console.error('Error al generar la historia:', error);
//         }
//     } else {
//         console.error('No se encontró un ID en Local Storage. Primero, guarda la información en MongoDB.');
//     }
// }