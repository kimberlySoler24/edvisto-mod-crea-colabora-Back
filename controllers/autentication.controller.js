const { response } = require("express");

let historicalData = []; // se crea un array vacío para almacenar temporalmente información de los datos agregados

async function historyInformation(request, response) {
    console.log(request.body);
    const idea = request.body.idea;//permite revisar cada una de las cosas que necesito
    const project = request.body.project;
    const interest = request.body.interest;
    const knowledge = request.body.knowledge;
    const think = request.body.think;
    const information = request.body.information;
    if (!idea || !project || !interest || !knowledge || !think || !information) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    }

    historicalData.push({
        idea,
        project,
        interest,
        knowledge,
        think,
        information
    }); // se implementa le método push con el fin de agregar la información en la variable historicalData
    
    response.json({
        status: "Success",
        message: "Información historica guardada exitosamente"
    }); // corresponde al resultado exitoso del método POST para almacenamiento de información en el objeto requerido.
}


async function getHistoryInformation(request, response) {
    try {
        response.json({ historicalData })
    } catch (error) {
        console.log(error);
        response.status(500).json({
            status: "Error",
            message: "Error al obtener información de historia"
        })
    }
}; // esta función asincrona nos permite obtener los datos guardados temporalmente en la variables historicalData, cuando se actualice el servidor, esta información se perderá




module.exports = { historyInformation, getHistoryInformation }; // permite exportación de funciones para implementación de estas en el archivo app.js