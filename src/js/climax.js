// Variable para indicar si el reconocimiento está activado
let recognitionActiveAmazing = false;
let recognitionActiveKnowledge = false;
let recognitionAmazing; // Declarar la variable fuera del bloque condicional
let recognitionKnowledge; // Declarar la variable fuera del bloque condicional

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

 // Función para iniciar o detener el reconocimiento al hacer clic en el botón
 const toggleRecognitionAmazing = () => {
     if (recognitionActiveAmazing) {
         recognitionAmazing.stop();
         document.getElementById("voice-amazing").innerText = "Dictado desactivado";
     } else {
         recognitionAmazing.start();
         document.getElementById("voice-amazing").innerText = "Dictado activado";
     }
     recognitionActiveAmazing = !recognitionActiveAmazing;
 };

 const toggleRecognitionKnowledge = () => {
     if (recognitionActiveKnowledge) {
         recognitionKnowledge.stop();
         document.getElementById("voice-knowledge").innerText = "Dictado desactivado";
     } else {
         recognitionKnowledge.start();
         document.getElementById("voice-knowledge").innerText = "Dictado activado";
     }
     recognitionActiveKnowledge = !recognitionActiveKnowledge;
 };

 document.addEventListener("DOMContentLoaded", function() {

     // Si el navegador es compatible, configurar el reconocimiento de voz para el título
     if (elNavegadorEsCompatible()) {
        recognitionAmazing = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                 window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionAmazing.lang = "es-US";

         recognitionAmazing.onend = (event) => { 
             if (recognitionActiveAmazing) {
                 recognitionAmazing.start(); 
             }
         };

         recognitionAmazing.onresult = (resultado) => { manejarResultadoAmazing(resultado); }; 

         document.getElementById("voice-amazing").addEventListener("click", toggleRecognitionAmazing);
     }

     // Si el navegador es compatible, configurar el reconocimiento de voz para el texto Knowledgee
     if (elNavegadorEsCompatible()) {
        recognitionKnowledge = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                     window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionKnowledge.lang = "es-US";

         recognitionKnowledge.onend = (event) => { 
             if (recognitionActiveKnowledge) {
                 recognitionKnowledge.start(); 
             }
         };

         recognitionKnowledge.onresult = resultado => { manejarResultadoKnowledge(resultado); }; 

         document.getElementById("voice-knowledge").addEventListener("click", toggleRecognitionKnowledge);
     }
 });

 // Función que maneja el resultado del reconocimiento de voz para el título
 const manejarResultadoAmazing = resultado => {
     document.getElementById("amazing").value = resultado.results[0][0].transcript;
 };

 // Función que maneja el resultado del reconocimiento de voz para el texto Knowledgee
 const manejarResultadoKnowledge = resultado => {
     document.getElementById("knowledge").value = resultado.results[0][0].transcript;
 };



let climax = document.getElementById ('amazing')
console.log(climax)
let amazingLength = document.getElementById ('amazing-length')
climax.addEventListener ('input', function (event) {
let inputLenght = climax.value.length
amazingLength.innerText = `${inputLenght}/5000`
}
)

let know = document.getElementById ('knowledge')
console.log(know)
let knowledgeLength = document.getElementById ('knowledge-length')
know.addEventListener ('input', function (event) {
let inputLenght = know.value.length
knowledgeLength.innerText = `${inputLenght}/5000`
}
)
