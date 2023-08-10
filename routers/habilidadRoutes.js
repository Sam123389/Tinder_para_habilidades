const express = require('express');
const router = express.Router();
const habilidadController = require('../controllers/habilidadController');

router.get('/habilidades', habilidadController.getAllHabilidades);
router.get('/habilidades/:id', habilidadController.getHabilidadById);
router.post('/habilidades', habilidadController.createHabilidad);
router.put('/habilidades/:id', habilidadController.updateHabilidad);
router.delete('/habilidades/:id', habilidadController.deleteHabilidad);

module.exports = router;
