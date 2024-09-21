const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Turno = sequelize.define('Turno', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    observacion: {
        type: DataTypes.STRING(1000),
    },
    estado: {
        type: DataTypes.STRING(100),
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.UUID,
        allowNull: false
    }

},{
    tableName: 'Turnos',
    timestamps: true
})

module.exports = Turno;
