const { Schema, model } = require('mongoose');

const PacienteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    DPI: {
        type: Number,
        required: true,
        unique: true
    },
    genero: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    }

});

module.exports = model('Paciente', PacienteSchema);