const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InformationSchema = Schema({
    idea: {
        type: String, 
        required: true
    },
    project: {
        type: String, 
        required: true
     },
    interest: {
        type: String, 
        required: true
    },
    knowledge: {
        type: String, 
        required: true
    },
    think: {
        type: String, 
        required: true
    },
    information: {
        type: String, 
        required: true
    }, 
    responseAI: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('InformationSchema', InformationSchema);