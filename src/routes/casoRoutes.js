const express = require('express');
const casoController = require('../controllers/casoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, casoController.createCaso); // Crear un caso
router.put('/edit/:id', authMiddleware, casoController.editCaso); // Editar un caso
router.delete('/delete/:id', authMiddleware, casoController.deleteCaso); // Eliminar un caso

module.exports = router;