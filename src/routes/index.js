const express = require('express');
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clienteRoutes');
const turnoRoutes = require('./turnoRoutes'); // Agregar rutas de turnos
const casoRoutes = require('./casoRoutes');   // Agregar rutas de casos
const tramiteRoutes = require('./tramiteRoutes'); // Agregar rutas de trámites
const notificacionRoutes = require('./notificacionRoutes'); // Agregar rutas de notificaciones

const router = express.Router();

router.use('/user', userRoutes);
router.use('/client', clientRoutes);
router.use('/turno', turnoRoutes); // Usar rutas de turnos
router.use('/caso', casoRoutes); // Usar rutas de casos
router.use('/tramite', tramiteRoutes); // Usar rutas de trámites
router.use('/notificacion', notificacionRoutes); // Usar rutas de notificaciones

module.exports = router;