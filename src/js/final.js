// Variable para indicar si el reconocimiento está activado
let recognitionActiveLearning = false;
let recognitionActiveBibliography = false;
let recognitionLearning; // Declarar la variable fuera del bloque condicional
let recognitionBibliography; // Declarar la variable fuera del bloque condicional

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
 const toggleRecognitionLearning = () => {
     if (recognitionActiveLearning) {
         recognitionLearning.stop();
         document.getElementById("voice-learning").innerText = "Dictado desactivado";
     } else {
         recognitionLearning.start();
         document.getElementById("voice-learning").innerText = "Dictado activado";
     }
     recognitionActiveLearning = !recognitionActiveLearning;
 };

 const toggleRecognitionBibliography = () => {
     if (recognitionActiveBibliography) {
         recognitionBibliography.stop();
         document.getElementById("voice-bibliography").innerText = "Dictado desactivado";
     } else {
         recognitionBibliography.start();
         document.getElementById("voice-bibliography").innerText = "Dictado activado";
     }
     recognitionActiveBibliography = !recognitionActiveBibliography;
 };

 document.addEventListener("DOMContentLoaded", function() {

     // Si el navegador es compatible, configurar el reconocimiento de voz para el título
     if (elNavegadorEsCompatible()) {
        recognitionLearning = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                 window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionLearning.lang = "es-US";

         recognitionLearning.onend = (event) => { 
             if (recognitionActiveLearning) {
                 recognitionLearning.start(); 
             }
         };

         recognitionLearning.onresult = (resultado) => { manejarResultadoLearning(resultado); }; 

         document.getElementById("voice-learning").addEventListener("click", toggleRecognitionLearning);
     }

     // Si el navegador es compatible, configurar el reconocimiento de voz para el texto Bibliographye
     if (elNavegadorEsCompatible()) {
        recognitionBibliography = new (window.SpeechRecognition || window.webkitSpeechRecognition || 
                                     window.mozSpeechRecognition || window.msSpeechRecognition)();
         recognitionBibliography.lang = "es-US";

         recognitionBibliography.onend = (event) => { 
             if (recognitionActiveBibliography) {
                 recognitionBibliography.start(); 
             }
         };

         recognitionBibliography.onresult = resultado => { manejarResultadoBibliography(resultado); }; 

         document.getElementById("voice-bibliography").addEventListener("click", toggleRecognitionBibliography);
     }
 });

 // Función que maneja el resultado del reconocimiento de voz para el título
 const manejarResultadoLearning = resultado => {
     document.getElementById("learning").value = resultado.results[0][0].transcript;
 };

 // Función que maneja el resultado del reconocimiento de voz para el texto Bibliographye
 const manejarResultadoBibliography = resultado => {
     document.getElementById("bibliography").value = resultado.results[0][0].transcript;
 };



let end = document.getElementById ('learning')
console.log(end)
let learningLength = document.getElementById ('learning-length')
end.addEventListener ('input', function (event) {
let inputLenght = end.value.length
learningLength.innerText = `${inputLenght}/5000`
}
)

let source = document.getElementById ('bibliography')
console.log(source)
let bibliographyLength = document.getElementById ('bibliography-length')
source.addEventListener ('input', function (event) {
let inputLenght = source.value.length
bibliographyLength.innerText = `${inputLenght}/5000`
}
)
