const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InformationSchema = Schema({
    title: {
        type: String, 
        required: true
    },
    vida: {
        type: [String], 
        required: true
     },
    suceso: {
        type: String, 
        required: true
    },
    resolver: {
        type: String, 
        required: true
    },
    idea: {
        type: String, 
        required: true
    },
    solucion: {
        type: String, 
        required: true
    }, 
    responseAI: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('InformationSchema', InformationSchema);