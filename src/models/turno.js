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

},{
    tableName: 'Turnos',
    timestamps: true
})

module.exports = Turno;