const express = require('express');
const notificacionController = require('../controllers/notificacionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, notificacionController.createNotificacion); // Crear una notificación
router.put('/marcarcomoleida/:id', authMiddleware, notificacionController.marcarComoLeida); // Marcar notificación como leída
router.get('/getall', authMiddleware, notificacionController.getNotificaciones); // Obtener todas las notificaciones

module.exports = router;