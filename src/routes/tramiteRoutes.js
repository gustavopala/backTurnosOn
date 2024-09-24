const express = require('express');
const tramiteController = require('../controllers/tramiteController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, tramiteController.createTramite); // Crear un trámite
router.put('/edit/:id', authMiddleware, tramiteController.editTramite);
router.delete('/delete/:id', authMiddleware, tramiteController.deleteTramite); // Eliminar un trámite
router.get('/getbycaso/:casoId', authMiddleware, tramiteController.getTramitesByCaso); // Traer trámites por caso

module.exports = router;