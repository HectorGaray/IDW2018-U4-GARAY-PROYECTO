const mongoose = require('mongoose');

let clienteSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required:true
    }
});

const clienteModel = mongoose.model('ClienteSchema', clienteSchema, 'cliente');

module.exports = clienteModel;