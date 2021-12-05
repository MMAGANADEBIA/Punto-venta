const express = require('express');
var urlencodedParser = express.urlencoded({extended: true});

const router = express.Router();

const {index, dashboard, inventario, ventas, caja, cuentas, crear_cuenta, agregar_cuenta} = require('../../controllers/user.js');

router.get('/', index);
router.post('/dashboard', urlencodedParser, dashboard);
router.get('/dashboard/inventario', inventario);
router.get('/dashboard/ventas', ventas);
router.get('/dashboard/caja', caja);
router.get('/dashboard/cuentas', cuentas);
router.get('/crear_cuenta', crear_cuenta);
router.post('/crear_cuenta/agregar_cuenta', urlencodedParser, agregar_cuenta);

module.exports = router;
