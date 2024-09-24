const express = require('express');
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, clienteController.create)
router.get('/getall', authMiddleware, clienteController.getAll)
router.get('/getdetail/:id', authMiddleware, clienteController.getDetail); // Añadir el parámetro id
router.post('/edit/:id', authMiddleware, clienteController.edit); // Añadir el parámetro id
router.delete('/delete/:id', authMiddleware, clienteController.delete); // Cambiar a DELETE y añadir el parámetro id
router.get('/getclientturnos/:id', authMiddleware, clienteController.getClientTurnos); // Añadir el parámetro id para obtener turnos de un cliente
router.get('/gerclientcasos/:id', authMiddleware, clienteController.getClientCasos); // Añadir el parámetro id para obtener casos de un cliente

module.exports = router;