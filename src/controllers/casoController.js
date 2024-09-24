const { Caso } = require('../models');

exports.createCaso = async (req, res, next) => {
    const { descripcion, fecha_final, estado, clienteId } = req.body;
    try {
        if (!descripcion || !clienteId) {
            return res.status(400).json({ mensaje: 'Descripción y Cliente son requeridos.' });
        }

        const nuevoCaso = await Caso.create({ descripcion, fecha_final, estado, clienteId });
        res.status(201).json({ mensaje: 'Caso creado con éxito', caso: nuevoCaso });
    } catch (error) {
        next(error);
    }
};

exports.editCaso = async (req, res, next) => {
    const { id } = req.params;
    const { descripcion, fecha_final, estado } = req.body;
    try {
        const caso = await Caso.findByPk(id);

        if (!caso) {
            return res.status(404).json({ mensaje: 'Caso no encontrado.' });
        }

        await caso.update({ descripcion, fecha_final, estado });
        res.status(200).json({ mensaje: 'Caso actualizado con éxito', caso });
    } catch (error) {
        next(error);
    }
};

exports.deleteCaso = async (req, res, next) => {
    const { id } = req.params;
    try {
        const caso = await Caso.findByPk(id);

        if (!caso) {
            return res.status(404).json({ mensaje: 'Caso no encontrado.' });
        }

        await caso.destroy();
        res.status(204).json({ mensaje: 'Caso eliminado con éxito' });
    } catch (error) {
        next(error);
    }
};