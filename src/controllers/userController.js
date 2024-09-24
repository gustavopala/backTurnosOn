const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { JWT_SECRET, JWT_REFRESH_SECRET } = require('../config/env');

exports.register = async (req, res, next) => {
    const { nombre, telefono, cuit, dni, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newCliente = await User.create({ nombre, telefono, cuit, dni, password: hashedPassword, email });
        res.status(201).json({ mensaje: 'Cliente Registrado', usuario: newCliente });
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { dni, password } = req.body;
    try {
      const cliente = await User.findOne({ where: { dni } });
      if (!cliente || !await bcrypt.compare(password, cliente.password)) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
      
      // Generar Access Token y Refresh Token
      const accessToken = jwt.sign({ id: cliente.id }, JWT_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ id: cliente.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
  
      // Enviar el Refresh Token como cookie
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,   // Evita que el frontend acceda al token
        secure: true,     // Solo se envía a través de HTTPS
        sameSite: 'strict', // Protege contra ataques CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
      });
  
      // Enviar el Access Token en el body
      res.status(200).json({ mensaje: 'Autenticación exitosa', token: accessToken });
    } catch (error) {
      next(error);
    }
  };

  exports.refreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
  
    if (!refreshToken) {
      return res.status(403).json({ mensaje: 'Refresh Token no proporcionado' });
    }
  
    try {
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      const newAccessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token: newAccessToken });
    } catch (error) {
      res.status(401).json({ mensaje: 'Refresh Token inválido o expirado' });
    }
  };


