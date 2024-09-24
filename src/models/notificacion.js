const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificacion = sequelize.define('Notificacion', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    motivo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50), // Podría ser algo como "email", "sms", etc.
        allowNull: false
    },
    leido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Inicialmente las notificaciones no están leídas
    },
    clienteId: {
        type: DataTypes.UUID,
        allowNull: false // Relación con Cliente
    }
}, {
    tableName: 'Notificaciones',
    timestamps: true // Para createdAt y updatedAt
});

module.exports = Notificacion;