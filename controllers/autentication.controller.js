const InformationSchema = require('../models/informationHistory.js');

async function historyInformation(request, response) {
    console.log(request.body);
    let informationSchema = new InformationSchema();

    informationSchema.title = request.body.title; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.vida = request.body.vida;
    informationSchema.suceso = request.body.suceso; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.resolver = request.body.resolver;
    informationSchema.idea = request.body.idea; //permite obtener el valor de entrada de cada etiqueta HTML
    informationSchema.solucion = request.body.solucion;


    if (!informationSchema.title  || !informationSchema.vida || !informationSchema.suceso  || !informationSchema.resolver ||!informationSchema.idea  || !informationSchema.solucion) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    };

    try {
      const savedData = await informationSchema.save();
      response.status(200).json({
        id: savedData._id,
        message: 'Información guardada exitosamente'
      });
    } catch (error) {
      response.save(500).json({
        message: `La información no se está guardando en la base de datos ${error}`
      })
    }

    // informationSchema
    // .save()
    // .then((data) => response.status(200).json(data))
    // .catch((error) => response.status(500).json({message: `La información no se está guardando en la base de datos ${error}`}));
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