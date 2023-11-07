const InformationSchema = require('../models/informationHistory.js');

const OpenAIApi = require('openai'); //variable que se necesita para utilizar el SDK de OPENAI de javascript

// Inicialización de openAI API
const openai = new OpenAIApi({
    apikey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANIZATION_OPEN_AI
});

async function responseOpenApiAI(request, response) {
    const historyId = request.params.historyId 
    InformationSchema
    .findById(historyId)
    .then(async (data) => {
        const mensajeUsuario = `Crear una historia basada en la información con ID ${historyId}:\n${JSON.stringify(data)}`;
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: mensajeUsuario }],
            model: 'gpt-3.5-turbo',
            temperature: 0.8,
            max_tokens: 10
        });

        const responseOpenAI = chatCompletion.choices[0].message.content;
        console.log(chatCompletion.choices[0].message.content);

        InformationSchema.findByIdAndUpdate(historyId, { responseAI: responseOpenAI }, {new: true}).
        then((updateData) => {
            console.log('Respuesta de openAI guargada en la base de datos: ', updateData);
            response.status(200).json({ message: 'Respuesta guardada en la base de datos'});
        }).
        catch((error) => response.status(500).json({
            message: `Error al actualizar el registro en la base de datos: ${error}`}));

    })
    .catch((error) => response.status(500).json({message: `Error creando narrativa ${error}`}))

}

module.exports = { responseOpenApiAI };






