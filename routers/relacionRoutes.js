const express = require('express');
const router = express.Router();
const relacionController = require('../controllers/relacionController');

router.get('/relaciones', relacionController.getAllRelaciones);
router.get('/relaciones/:id', relacionController.getRelacionById);
router.post('/relaciones', relacionController.createRelacion);
router.put('/relaciones/:id', relacionController.updateRelacion);
router.delete('/relaciones/:id', relacionController.deleteRelacion);

module.exports = router;
