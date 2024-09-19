const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh', userController.refreshToken);  // Nueva ruta para refrescar el token


// Ruta protegida como ejemplo
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ mensaje: `Usuario con ID: ${req.userId}` });
});

module.exports = router;