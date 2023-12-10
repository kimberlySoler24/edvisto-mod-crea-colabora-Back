//IMPORTACIÓN DE DEPENDENCIAS Y LIBRERIAS A USAR EN EL PROYECTO
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // inicialización de dependencias
const {responseOpenApiAI} = require('./apiopenai/apiopenai.js');
const { historyInformation, getHistoryInformation, getHistoryInformationById, updateInformation, deleteInformation } = require('./controllers/autentication.controller.js');
//---const----------------------------------------

const app = express(); //variable donde va a escuchar la aplicación

// DEFINICIÓN DE PUERTO Y LLAMADO
const PORT_DEFINED = process.env.PORT || 3000; //se crea el puerto donde queremos visualizar la información de forma local. 
app.listen(PORT_DEFINED, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT_DEFINED}...`);
}); // se llama el puerto para que este sea escuchado y se pueda visualizar desde express.js 
//--------------------------------------------------------------------------------


//CONEXIÓN DE BASE DE DATOS MONGODB 
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.log(error));
//--------------------------------------------------------------------------------



//VISUALIZACIÓN HTML: está parte del código me permite mostrar lo que se encuentra en estructurado en el archivo HTML
//CONFIGURACION ESTÁTICA: permite scceder a todos los archivos situados en la carpeta src de forma estática, estático quiere decir que se sirven así tal cual como están sin ninguna modificación
app.use(express.static(__dirname + '/src'));
app.use(express.json()); //permite leer formatos json en el framework express


// RUTAS : acceso a las diferentes rutas que se van a crear en el proyecto
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/index.html'));
});

app.get('/narrativa', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/src/story-camino.html'));
});


app.post('/api/informacion-historia', historyInformation);//permite agregar información requerida en nuesta api de la página 1.
app.get('/api/informacion-historia', getHistoryInformation);// permite obtener la información con el método GET y visualizarla en la ruta respectiva
app.get('/api/informacion-historia/:historyId', getHistoryInformationById); // permite obtener información especifica por id
// app.put('/api/informacion-historia/:historyId', updateInformation);
app.delete('/api/informacion-historia/:historyId', deleteInformation);
//app.put('/api/informacion-historia/:historyId', responseOpenApiAI); 
//------------------------------------------------------
