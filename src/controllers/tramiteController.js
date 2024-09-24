const { Tramite, Caso } = require('../models');

exports.createTramite = async (req, res, next) => {
    const { descripcion, fecha_final, estado, fecha_vencimiento, observacion, casoId } = req.body;
    try {
        if (!descripcion || !casoId) {
            return res.status(400).json({ mensaje: 'Descripción y Caso son requeridos.' });
        }

        const nuevoTramite = await Tramite.create({ descripcion, fecha_final, estado, fecha_vencimiento, observacion, casoId });
        res.status(201).json({ mensaje: 'Trámite creado con éxito', tramite: nuevoTramite });
    } catch (error) {
        next(error);
    }
};

exports.editTramite = async (req, res, next) => {
    const { id } = req.params;
    const { descripcion, fecha_final, estado, fecha_vencimiento, observacion } = req.body;

    try {
        const tramite = await Tramite.findByPk(id);

        if (!tramite) {
            return res.status(404).json({ mensaje: 'Trámite no encontrado.' });
        }

        await tramite.update({ descripcion, fecha_final, estado, fecha_vencimiento, observacion });
        res.status(200).json({ mensaje: 'Trámite actualizado con éxito', tramite });
    } catch (error) {
        next(error);
    }
};

exports.deleteTramite = async (req, res, next) => {
    const { id } = req.params;
    try {
        const tramite = await Tramite.findByPk(id);

        if (!tramite) {
            return res.status(404).json({ mensaje: 'Trámite no encontrado.' });
        }

        await tramite.destroy();
        res.status(204).json({ mensaje: 'Trámite eliminado con éxito' });
    } catch (error) {
        next(error);
    }
};

exports.getTramitesByCaso = async (req, res, next) => {
    const { casoId } = req.params;
    try {
        const tramites = await Tramite.findAll({
            where: { casoId },
        });

        if (tramites.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron trámites para el caso.' });
        }

        res.status(200).json({ mensaje: 'Consulta de trámites exitosa', tramites });
    } catch (error) {
        next(error);
    }
};