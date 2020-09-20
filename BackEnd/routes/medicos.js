const {Router} = require('express');
const {getMedico,crearMedico,actualizarMedico,borrarMedico}= require('../controllers/medico');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');

const {validarJWT} = require('../middlewares/validar-jwt');



const router = Router();

router.get('/',validarJWT,getMedico);

router.post('/',
[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('apellido','el apellido es obligatorio').not().isEmpty(),
    check('usuario','el usuario es obligatorio').not().isEmpty(),
    check('password','el password es obligatorio').not().isEmpty(),
    check('DPI','el DPI es obligatorio').not().isEmpty(),
    check('colegiado','el COLEGIADO es obligatorio').not().isEmpty(),
    check('genero','el genero es obligatorio').not().isEmpty(),
    validarCampos

],crearMedico);

router.put('/:id',
[
    validarJWT,
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('apellido','el apellido es obligatorio').not().isEmpty(),
    check('usuario','el usuario es obligatorio').not().isEmpty(),
    check('DPI','el DPI es obligatorio').not().isEmpty(),
    check('colegiado','el COLEGIADO es obligatorio').not().isEmpty(),
    check('password','el password es obligatorio').not().isEmpty(),
    validarCampos

],actualizarMedico);

router.delete('/:id',validarJWT,borrarMedico);

module.exports = router;