const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cuit: {
        type: DataTypes.BIGINT, 
        allowNull: false,
        unique: true
    },
    dni: {
        type: DataTypes.BIGINT, 
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.BIGINT, 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    campo1: {
        type: DataTypes.STRING(100),
       
    },
    campo2: {
        type: DataTypes.STRING(100),
       
    },
    campo3: {
        type: DataTypes.STRING(100),
       
    },
    observacion: {
        type: DataTypes.STRING(1000),
       
    }
}, {
    tableName: 'Users',
    timestamps: true
})

module.exports = User;