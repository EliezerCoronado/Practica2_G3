const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getPaciente,
    crearPaciente,
    actualizarPaciente,
    borrarPaciente
} = require('../controllers/paciente');
const validarJwt = require('../middlewares/validar-jwt');


const router = Router();

router.get('/', getPaciente, [
    validarJWT
], getPaciente);

router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'el apellido es obligatorio').not().isEmpty(),
    check('DPI', 'el DPI es obligatorio').not().isEmpty(),
    check('genero', 'el genero es obligatorio').not().isEmpty(),
    check('descripcion', 'la descripcion es obligatorio').not().isEmpty(),
    validarCampos
], crearPaciente);

router.put('/:id', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'el apellido es obligatorio').not().isEmpty(),
    check('genero', 'el genero es obligatorio').not().isEmpty(),
    check('descripcion', 'la descripcion es obligatorio').not().isEmpty(),
    validarCampos
], actualizarPaciente);

router.delete('/:id', borrarPaciente);

module.exports = router;