const { Turno, Cliente } = require('../models');

exports.createTurno = async (req, res, next) => {
    const { clienteId, observacion, estado, fecha, hora } = req.body;

    try {
        const cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        const nuevoTurno = await Turno.create({
            clienteId,
            observacion,
            estado,
            fecha,
            hora
        });

        res.status(201).json({ mensaje: 'Turno creado con éxito', turno: nuevoTurno });
    } catch (error) {
        next(error);
    }
};

exports.deleteTurno = async (req, res, next) => {
    const { id } = req.params;

    try {
        const turno = await Turno.findByPk(id);

        if (!turno) {
            return res.status(404).json({ mensaje: 'Turno no encontrado' });
        }

        await turno.destroy();
        res.status(204).json({ mensaje: 'Turno eliminado con éxito' });
    } catch (error) {
        next(error);
    }
};

exports.getClienteFromTurno = async (req, res, next) => {
    const { id } = req.params;

    try {
        const turno = await Turno.findByPk(id, {
            include: { model: Cliente, as: 'clienteTurno' }
        });

        if (!turno) {
            return res.status(404).json({ mensaje: 'Turno no encontrado' });
        }

        res.status(200).json({ mensaje: 'Cliente obtenido con éxito', cliente: turno.clienteTurno });
    } catch (error) {
        next(error);
    }
};

exports.getAllTurnos = async (req, res, next) => {
    try {
        const turnos = await Turno.findAll();
        res.status(200).json({ mensaje: 'Consulta de turnos con éxito', turnos });
    } catch (error) {
        next(error);
    }
};