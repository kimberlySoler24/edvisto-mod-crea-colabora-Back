const InformationSchema = require('../models/informationHistory.js');

const OpenAIApi = require('openai'); //variable que se necesita para utilizar el SDK de OPENAI de javascript

// Inicialización de openAI API
const openai = new OpenAIApi({
  apikey: process.env.OPENAI_API_KEY,
  organization: process.env.ORGANIZATION_OPEN_AI
});


async function historyInformation(request, response) {
  try {
    console.log(request.body);
    let informationSchema = new InformationSchema();

    informationSchema.title = request.body.title; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.vida = request.body.vida;
    informationSchema.suceso = request.body.suceso; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.resolver = request.body.resolver;
    informationSchema.idea = request.body.idea; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.solucion = request.body.solucion;


    if (!informationSchema.title || !informationSchema.vida || !informationSchema.suceso || !informationSchema.resolver || !informationSchema.idea || !informationSchema.solucion) {
      return response.status(400).send({
        status: "Error",
        message: "Los campos están incompletos"
      })
    };

    //guarda la informacion básica en la base de datos
    const savedData = await informationSchema.save();

    //Generar narrativa con OPENAI
    const mensajeUsuario = `Actúa como un experto en editor de textos. Redacta un texto con un tono y estilo amigable y entendible para niños de 8 a 10 años.
      Debe tener la siguiente estructura :  estructura narrativa ARGUMENTATIVA [ introducción es un párrafo de 150 caracteres / desarrollo de argumentos son 2 párrafos de 400 caracteres cada uno / conclusión un párrafo de 250 caracteres], utiliza como base para la redacción lo siguiente información : ${savedData._id}:\n${JSON.stringify(savedData)}`;

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: mensajeUsuario }],
      model: 'gpt-3.5-turbo',
      temperature: 0.1,
      max_tokens: 1000
    });

    const responseOpenAI = chatCompletion.choices[0].message.content;
    console.log(chatCompletion.choices[0].message.content);

    //Actualizar la base de datos con la respuesta de OpenAI
    const updateData = await InformationSchema.findByIdAndUpdate(savedData._id, { responseAI: responseOpenAI }, { new: true });

    console.log('Respuesta guardada en la base de datos: ', updateData);

    response.status(200).json({
      id: savedData._id,
      message: 'Información y respuesta guardadas exitosamente'
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: `Error al procesar la solicitud: ${error}`
    })
  }

}


 async function getHistoryInformation(request, response) {

    InformationSchema
    .find()
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({message: `La información no se encuentra en la base de datos ${error}`}))
  }; // esta función asincrona nos permite obtener los datos guardados temporalmente en la variables historicalData, cuando se actualice el servidor, esta información se perderá


  async function getHistoryInformationById(request, response) {
    const historyId= request.params.historyId 
    InformationSchema
    .findById(historyId)
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({message: `La información no se encuentra en la base de datos ${error}`}))
  };

  async function updateInformation(request, response) {
    const historyId= request.params.historyId 
    const {title, vida, suceso, resolver, idea, solucion} = request.body;
    InformationSchema
    .updateOne({ _id: historyId }, { $set: { title, vida, suceso, resolver, idea, solucion } } )
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({message: `La información no se encuentra en la base de datos ${error}`}))
  };

  async function deleteInformation(request, response) {
    const historyId= request.params.historyId 

    try{
        const deletedInformation = await InformationSchema.findByIdAndDelete(historyId);
        if(!deletedInformation){
            return response.status(404).json({ message: 'No se encuentra en base de datos' })
        };
        response.status(200).json(deletedInformation);
    } catch (error) {
        response.status(500).json({ message: `Error al eliminar la información: ${error}` })
    }
    
  };



module.exports = { historyInformation, getHistoryInformation, getHistoryInformationById, updateInformation, deleteInformation}; // permite exportación de funciones para implementación de estas en el archivo app.js