const express = require('express');
const turnoController = require('../controllers/turnoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, turnoController.createTurno); // Crear un turno asociándolo con un cliente
router.delete('/delete/:id', authMiddleware, turnoController.deleteTurno); // Eliminar un turno
router.get('/getcliente/:id', authMiddleware, turnoController.getClienteFromTurno); // Obtener el cliente asociado a un turno
router.get('/getall', authMiddleware, turnoController.getAllTurnos); // Traer todos los turnos

module.exports = router;