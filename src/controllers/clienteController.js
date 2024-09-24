const bcrypt = require('bcrypt');
const { Cliente } = require('../models')

exports.create = async (req, res, next) => {
    const { nombre, telefono, cuit, dni, password, email } = req.body;
    try {
        if (!nombre || !telefono || !cuit || !dni || !password || !email) {
            return res.status(400).json({ mensaje: 'todos los campos son requeridos.' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newClient = await Cliente.create({ nombre, telefono, cuit, dni, password: hashedPassword, email })
        res.status(201).json({ mensaje: 'Cliente Registrado', cliente: newClient });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ mensaje: 'El CUIT o el DNI ya están registrados.' });
        }
        next(error);
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const clients = await Cliente.findAll()
        res.status(200).json({ mensaje: 'consulta con exito', clientes: clients })
    } catch (error) {
        next(error);
    }
}

exports.getDetail = async (req, res, next) => {
    const { id } = req.params
    try {

        const client = await Cliente.findByPk(id)

        if (!client) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' })
        }

        res.status(200).json({ mensaje: 'consulta con exito', cliente: client })
    } catch (error) {
        next(error);
    }
}

exports.edit = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, telefono, cuit, dni, email } = req.body;
    try {
        const client = await Cliente.findByPk(id)
        if (!client) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' })
        }

        await client.update({ nombre, telefono, cuit, dni, email })
        res.status(200).json({ mensaje: 'Cliente actualizado con exito', cliente: client })
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.params;

    try {
        const client = await Cliente.findByPk(id);

        if (!client) {
            return res.status(404).json({ mensaje: 'cliente no encontrado' })
        }
        await client.destroy();
        res.status(204).json({ mensaje: 'cliente eliminado con exito' })
    } catch (error) {
        next(error);
    }
}

exports.getClientTurnos = async (req, res, next) => {
    const { id } = req.params;

    try {
        const client = await Cliente.findByPk( id, {
            include: {
                model: Turno,
                as: 'turnos'
            }
        })

        if(!client){
            return res.status(404).json({ mensaje: 'Cliente no encontrado' })
        }

        res.status(200).json({ mensaje: 'Turnos obtenidos con exito', turnos: client.turnos})
    } catch (error) {
        next(error)
    }
}

exports.getClientCasos = async (req, res, next) => {
    const { id } = req.params;

    try {
        const client = await Cliente.findByPk( id, {
            include: {
                model: Caso,
                as: 'casos'
            }
        })

        if(!client){
            return res.status(404).json({ mensaje: 'Cliente no encontrado' })
        }

        res.status(200).json({ mensaje: 'Casos obtenidos con exito', casos: client.casos})
    } catch (error) {
        
    }
}
