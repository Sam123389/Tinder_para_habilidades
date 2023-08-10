const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.get('/empresas', empresaController.getAllEmpresas);
router.get('/empresas/:id', empresaController.getEmpresaById);
router.post('/empresas', empresaController.createEmpresa);
router.put('/empresas/:id', empresaController.updateEmpresa);
router.delete('/empresas/:id', empresaController.deleteEmpresa);

module.exports = router;
