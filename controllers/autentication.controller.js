let historicalData = []; // se crea un array vacío para almacenar temporalmente información de los datos agregados

async function historyInformation(request, response) {
    console.log(request.body);
    const idea = request.body.idea;//permite obtener el valor de entrada de cada etiqueta HTML
    const project = request.body.project;
    if (!idea || !project ) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    }

    historicalData.push({ idea, project }); // se implementa le método push con el fin de agregar la información en la variable historicalData
    response.json({ historicalData }); // corresponde al resultado exitoso del método POST para almacenamiento de información en el objeto requerido.
}

async function historyInformationTwo(request, response) {
    console.log(request.body);
    const interest = request.body.interest; //permite obtener el valor de entrada de cada etiqueta HTML
    const knowledge = request.body.knowledge;
    if (!interest || !knowledge) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    }

    historicalData.push({ interest, knowledge }); // se implementa le método push con el fin de agregar la información en la variable historicalData
    response.json({ historicalData }); // corresponde al resultado exitoso del método POST para almacenamiento de información en el objeto requerido.
}

async function historyInformationThree(request, response) {
    console.log(request.body);
    const think = request.body.think; //permite obtener el valor de entrada de cada etiqueta HTML
    const information = request.body.information;
    if (!think || !information) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    }

    historicalData.push({ think, information }); // se implementa le método push con el fin de agregar la información en la variable historicalData
    
    response.json({ historicalData }); // corresponde al resultado exitoso del método POST para almacenamiento de información en el objeto requerido.

    
}

async function getHistoryInformation(request, response) {
    try {
        response.json({ historicalData }) //genera la solicitud de respuesta de toda la información registrada en la variable de objeto historicalData
    } catch (error) {
        console.log(error);
        response.status(500).json({
            status: "Error",
            message: "Error al obtener información de historia"
        })
    }
}; // esta función asincrona nos permite obtener los datos guardados temporalmente en la variables historicalData, cuando se actualice el servidor, esta información se perderá


module.exports = { historyInformation, historyInformationTwo, historyInformationThree, getHistoryInformation }; // permite exportación de funciones para implementación de estas en el archivo app.js