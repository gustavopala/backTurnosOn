const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Tramite = sequelize.define('Tramite', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fecha_final: {
        type: DataTypes.DATEONLY,
    },
    estado : {
        type: DataTypes.STRING(100),
    },
    fecha_vencimiento: {
        type: DataTypes.DATEONLY
    },
    observacion: {
        type: DataTypes.STRING(1000)
    }
},{
    tableName: 'Tramites',
    timestamps: true
})

module.exports = Tramite;