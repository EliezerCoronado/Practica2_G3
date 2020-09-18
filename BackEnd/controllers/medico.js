const Medico = require('../models/medico');
const { response } = require('express');
//const {validationResult}=require('express-validator');
const bcrypt = require('bcryptjs');
const { router } = require('../routes/medicos');
const { generarJWT } = require('../helpers/jwt');


const getMedico = async(req, res) => {
    const medicos = await Medico.find();

    res.json({
        ok: true,
        medicos,
        uid: req.uid
    });
}

const crearMedico = async(req, res = response) => {
    const { nombre, appellido, usuario, password, DPI, colegiado, genero } = req.body;
    try {

        const existeDPI = await Medico.findOne({ DPI });
        const existeUsuario = await Medico.findOne({ usuario });
        const existeColegiado = await Medico.findOne({ colegiado });

        if (existeDPI) {
            return res.status(400).json({
                ok: false,
                msg: 'El DPI ya existe'
            });
        }

        if (existeUsuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El nombre de usuario ya existe'
            });
        }

        if (existeColegiado) {
            return res.status(400).json({
                ok: false,
                msg: 'Numero de colegiado ya existe'
            });
        }

        const medico = new Medico(req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        medico.password = bcrypt.hashSync(password, salt);

        //guardar médico
        await medico.save();


        //generar token JWT
        const token = await generarJWT(medico._id);


        //console.log(req.body);
        res.json({
            ok: true,
            medico,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado...'
        });
    }


}

const actualizarMedico = async(req, res = response) => {
    const uid = req.params.id;


    try {

        const medicoDB = await Medico.findById(uid);

        if (!medicoDB) {
            return res.status(404).json({
                ok: false,
                msg: "no existe un medico con ese id"
            });
        }
        //Actualizaciones
        const campos = req.body;
        if (medicoDB.DPI === req.body.DPI) {
            delete campos.DPI;
        } else {
            const existeDPI = await Medico.findOne({ DPI: req.body.DPI });
            if (existeDPI) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un medico con este DPI'
                });
            }
        }

        if (medicoDB.colegiado === req.body.colegiado) {
            delete campos.colegiado;
        } else {
            const existeColegiado = await Medico.findOne({ colegiado: req.body.colegiado });
            if (existeColegiado) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un medico con este colegiado'
                });
            }
        }

        if (medicoDB.usuario === req.body.usuario) {
            delete campos.usuario;
        } else {
            const existeUsuario = await Medico.findOne({ usuario: req.body.usuario });
            if (existeUsuario) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un medico con este nombre de usuario'
                });
            }
        }

        if (medicoDB.nombre === req.body.nombre) {
            delete campos.nombre;
        } else {

        }

        if (medicoDB.appellido === req.body.appellido) {
            delete campos.appellido;
        } else {

        }
        //para borrar campos que no son necesarios al momento de actualizar
        //delete campos.password;

        const medicoActualizado = await Medico.findByIdAndUpdate(uid, campos, { new: true });


        //TO DO validar token 




        res.json({
            ok: true,
            medico: medicoActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const borrarMedico = async(req, res = response) => {
    const uid = req.params.id;

    try {
        const medicoDB = await Medico.findById(uid);

        if (!medicoDB) {
            return res.status(404).json({
                ok: false,
                msg: "no existe un medico con ese id para borrar"
            });
        }

        await Medico.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'usuario eliminado'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'no se pudo borrar el medico'
        });
    }
}

module.exports = { getMedico, crearMedico, actualizarMedico, borrarMedico }