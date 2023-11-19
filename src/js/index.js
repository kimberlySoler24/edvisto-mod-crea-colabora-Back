
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


//llamado de API para guardar información.
document.getElementById("formato").addEventListener("submit", async(event) => { //en esta sección se selecciona un elemento del HTML con el ID denominado form-history del formulario definido y agrega un escuchador de eventos, el cual estará atento a cuando ese formulario sea enviado 'submit'. Cueando eso sucede, se ejecutará la función proporcionada como segundo argumento, en este caso la función asíncrona con parámetro definido 'event'.
    event.preventDefault(); // Por defecto, una página HTML se recarga cuando se efectúa el envío respectivo por medio del botón, esta línea de código evita que la página se recargue.
    console.log(event); // muestra en la consola el objeto 'event'. Este objeto contiene información sobre el evento que ha icurrido, en este caso, el envío del formulario.

    const respuesta = await fetch("http://localhost:3000/api/informacion-historia", { //fetch permite realizar comunicación con el bakcend, donde hacer una solicitud a la URL definida.
        method:"POST", //Se específica que la solicitud es de tipo POST, que es uno de los métodos HTTP utilizados para enviar datos al servidor.
        headers:{ // Se establece el encabezado de la solicitud HTTP para indicar que se está enviando datos en formato JSON.
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // Corresponde al cuerpo de la solicitud donde se definen los datos del objeto event que se enviarán al servidor. Estos datos los convierte en una cadena de texto JSON.
            title: event.target.querySelector('#title').value,
            vida: getSelectedCheckboxes('vida-container'),
            suceso: event.target.querySelector('#suceso').value,
            resolver: event.target.querySelector('#resolver').value,
            idea: event.target.querySelector('#idea').value,
            solucion: event.target.querySelector('#solucion').value,
        })
    });

});



