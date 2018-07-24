const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    _id: {
        type:String,
        required: true
    },
    descripcion: {
        type: String,
        required:true
    },
    precio: {
        type: String,//tipo entero?
        required:true
    }
});

const productoModel = mongoose.model('ProductoSchema', productoSchema, 'producto');

module.exports = productoModel;