const { Notificacion } = require('../models');

exports.createNotificacion = async (req, res, next) => {
    const { motivo, tipo, clienteId } = req.body;
    try {
        if (!motivo || !tipo || !clienteId) {
            return res.status(400).json({ mensaje: 'Motivo, tipo y clienteId son requeridos.' });
        }

        const nuevaNotificacion = await Notificacion.create({ motivo, tipo, clienteId });
        res.status(201).json({ mensaje: 'Notificación creada con éxito', notificacion: nuevaNotificacion });
    } catch (error) {
        next(error);
    }
};

exports.marcarComoLeida = async (req, res, next) => {
    const { id } = req.params;
    try {
        const notificacion = await Notificacion.findByPk(id);

        if (!notificacion) {
            return res.status(404).json({ mensaje: 'Notificación no encontrada.' });
        }

        notificacion.leido = true;
        await notificacion.save();
        res.status(200).json({ mensaje: 'Notificación marcada como leída', notificacion });
    } catch (error) {
        next(error);
    }
};

exports.getNotificaciones = async (req, res, next) => {
    try {
        const notificaciones = await Notificacion.findAll({
            where: { leido: false }, // Filtrar solo las notificaciones no leídas
            order: [['createdAt', 'DESC']] // Ordenar por fecha de creación, de más reciente a más antiguo
        });
        
        res.status(200).json({ mensaje: 'Consulta de notificaciones exitosa', notificaciones });
    } catch (error) {
        next(error);
    }
};