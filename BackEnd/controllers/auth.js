const {response} = require('express');
const Medico = require('../models/medico');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const login = async (req,res = response)=>{
    const {usuario,password} = req.body;

    try {

        //verificar usuario
        const medicoDB = await Medico.findOne({usuario});

        if(!medicoDB){
            return res.status(404).json({
                ok: false,
                msg: 'email no encontrado'
            });
        }

        //verificar password
        const validPassword =  bcrypt.compareSync(password,medicoDB.password);
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'contraseña no valida'
            });
        }

        //generar token JWT
        const token = await generarJWT(medicoDB._id);

        res.json({
            ok: true,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en login'
        });
    }

}

module.exports = {login}