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
        const mensajeUsuario = `Actúa como un experto en editor de textos. Redacta un texto con un tono y estilo amigable y entendible para niños de 8 a 10 años.
        Debe tener la siguiente  estructura :  estructura narrativa ARGUMENTATIVA [ introducción es un párrafo de 150 caracteres / desarrollo de argumentos son 2 párrafos de 400 caracteres cada uno / conclusión un párrafo de 250 caracteres], utiliza como base para la redacción lo siguiente información : ${historyId}:\n${JSON.stringify(data)}`;
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: mensajeUsuario }],
            model: 'gpt-3.5-turbo',
            temperature: 0.1,
            max_tokens: 1000
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






