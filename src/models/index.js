const Cliente = require('./cliente');
const Turno = require('./turno');

// Definir la relación 1:n entre Cliente y Turno
Cliente.hasMany(Turno, {
    foreignKey: 'clienteId',
    as: 'turnos' // Alias para la relación
});

Turno.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'cliente'
});

// Exportar los modelos para usarlos en otras partes
module.exports = {
    Cliente,
    Turno
};