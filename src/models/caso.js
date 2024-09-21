const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Caso = sequelize.define('Caso', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_final: {
        type: DataTypes.DATEONLY,
    },
    estado: {
        type: DataTypes.STRING(100),
    }
}, {
    tableName: 'Casos',
    timestamps: true
})

module.exports = Caso;