const { Mongoose } = require("mongoose");

const {Schema,model} = require('mongoose');

const MedicoSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    usuario:{//
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    DPI:{
        type: Number,
        required: true,
        unique: true
    },
    colegiado:{
        type:Number,
        required:true,
        unique: true
    },
    genero:{
        type: String,
        required: true
    }

});

module.exports = model('Medico',MedicoSchema);