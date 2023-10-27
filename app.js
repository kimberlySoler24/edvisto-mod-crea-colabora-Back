//IMPORTACIÓN DE DEPENDENCIAS Y LIBRERIAS A USAR EN EL PROYECTO
const express = require('express');
const path = require('path'); // inicialización de dependencias
const app = express(); //variable donde va a escuchar la aplicación
const { historyInformation, historyInformationTwo, historyInformationThree, getHistoryInformation } = require('./controllers/autentication.controller.js')
//-------------------------------------------

// DEFINICIÓN DE PUERTO Y LLAMADO
const PORT_DEFINED = process.env.PORT || 3000; //se crea el puerto donde queremos visualizar la información de forma local. 
app.listen(PORT_DEFINED, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT_DEFINED}...`);
}); // se llama el puerto para que este sea escuchado y se pueda visualizar desde express.js 
//--------------------------------------------------------------------------------

//VISUALIZACIÓN HTML: está parte del código me permite mostrar lo que se encuentra en estructurado en el archivo HTML
//CONFIGURACION ESTÁTICA: permite scceder a todos los archivos situados en la carpeta src de forma estática, estático quiere decir que se sirven así tal cual como están sin ninguna modificación
app.use(express.static(__dirname + '/src'));
app.use(express.json()); //permite leer formatos json en el framework express
app.use(express.static(__dirname + '/src/page-one'));
app.use(express.json()); //permite leer formatos json en el framework express
app.use(express.static(__dirname + '/src/page-two'));
app.use(express.json()); //permite leer formatos json en el framework express
app.use(express.static(__dirname + '/src/page-three'));
app.use(express.json()); //permite leer formatos json en el framework express

// RUTAS : acceso a las diferentes rutas que se van a crear en el proyecto
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/index.html'));
});

app.get('/index2', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/src/page-two/index2.html'));
});

app.get('/index3', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/src/page-three/index3.html'));
});

app.post('/api/informacion-pagina1', historyInformation);//permite agregar información requerida en nuesta api de la página 1.
app.post('/api/informacion-pagina2', historyInformationTwo);//permite agregar información requerida en nuesta api de la página 2.
app.post('/api/informacion-pagina3', historyInformationThree);//permite agregar información requerida en nuesta api de la página 3.

app.get('/api/informacion-historia', getHistoryInformation);// permite obtener la información con el método GET y visualizarla en la ruta respectiva
//------------------------------------------------------




