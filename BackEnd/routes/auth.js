const {Router} = require('express');
const {login} = require('../controllers/auth');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');

const router = Router();

router.post('/',[
    check('usuario','El usaurio es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
],login);

module.exports = router;