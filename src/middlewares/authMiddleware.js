const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/env')

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ mensaje: 'Token no proporcionado' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token invalido o expirado' });
    }
}

module.exports = authMiddleware;