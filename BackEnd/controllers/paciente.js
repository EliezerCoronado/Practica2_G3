const Paciente = require('../models/paciente');
const { response } = require('express');
//const {validationResult}=require('express-validator');
const bcrypt = require('bcryptjs');
const { router } = require('../routes/medicos');
const { generarJWT } = require('../helpers/jwt');
const { header } = require('express-validator');


const getPaciente = async(req, res) => {
    const { medico } = req.body;

    const pacientes = await Paciente.find({ medico });

    res.json({
        ok: true,
        pacientes: pacientes,

    });
}

const crearPaciente = async(req, res = response) => {
    const { nombre, appellido, DPI, genero, descripcion } = req.body;
    const uid = req.uid;
    const paciente = new Paciente({
        medico: uid,
        ...req.body
    });


    try {
        const existeDPI = await Paciente.findOne({ DPI });
        //const existeUsuario = await Medico.findOne({ usuario });
        //const existeColegiado = await Medico.findOne({ colegiado });
        // console.log(existeDPI);
        console.log('pero que');
        if (existeDPI) {
            return res.status(400).json({
                ok: false,
                msg: 'El DPI ya existe'
            });
        }

        // console.log(req.body);
        const pacienteDB = await paciente.save();

        res.json({
            ok: true,
            paciente: pacienteDB,
            msg: 'Paciente Creado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado...'
        });
    }


}

const actualizarPaciente = async(req, res = response) => {
    const uid = req.params.id;


    try {

        const pacienteDB = await Paciente.findById(uid);

        if (!pacienteDB) {
            return res.status(404).json({
                ok: false,
                msg: "error paciente no encontrado"
            });
        }
        //Actualizaciones
        const campos = req.body;


        if (pacienteDB.nombre === req.body.nombre) {
            delete campos.nombre;
        } else {

        }

        if (pacienteDB.appellido === req.body.appellido) {
            delete campos.appellido;
        } else {

        }

        if (pacienteDB.descripcion === req.body.descripcion) {
            delete campos.descripcion;
        } else {

        }
        //para borrar campos que no son necesarios al momento de actualizar
        //delete campos.password;

        const pacienteActualizado = await Paciente.findByIdAndUpdate(uid, campos, { new: true });


        //TO DO validar token 

        res.json({
            ok: true,
            msg: 'Paciente Actualizado',
            paciente: pacienteActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const borrarPaciente = async(req, res = response) => {
    const uid = req.params.id;

    try {

        const PacienteDB = await Paciente.findById(uid);

        if (!PacienteDB) {
            return res.status(404).json({
                ok: false,
                msg: "Error no se pudo borrar el paciente, no se encontro"
            });
        }

        await Paciente.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'paciente eliminado'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'no se pudo borrar el paciente'
        });
    }
}

module.exports = { getPaciente, crearPaciente, actualizarPaciente, borrarPaciente }