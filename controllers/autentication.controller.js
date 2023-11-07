const InformationSchema = require('../models/informationHistory.js');

async function historyInformation(request, response) {
    console.log(request.body);
    let informationSchema = new InformationSchema();

    informationSchema.idea = request.body.idea; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.project = request.body.project;
    informationSchema.interest = request.body.interest; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.knowledge = request.body.knowledge;
    informationSchema.think = request.body.think; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.information = request.body.information;


    if (!informationSchema.idea  || !informationSchema.project || !informationSchema.interest  || !informationSchema.knowledge ||!informationSchema.think  || !informationSchema.information) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    };

    informationSchema
    .save()
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({message: `La información no se está guardando en la base de datos ${error}`}));
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
    const {idea, project, interest, knowledge, think, information} = request.body;
    InformationSchema
    .updateOne({ _id: historyId }, { $set: { idea, project, interest, knowledge, think, information } } )
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