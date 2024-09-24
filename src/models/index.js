const Cliente = require('./cliente');
const Turno = require('./turno');
const Caso = require('./caso');
const Tramite = require('./tramite');
const Notificacion = require('./notificacion');
const User = require('./user')

// Definir la relación 1:n entre Cliente y Turno
Cliente.hasMany(Turno, {
    foreignKey: 'clienteId',
    as: 'turnos' // Alias único para Turnos
});

Turno.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'clienteTurno' // Alias único para Cliente desde Turno
});

// Definir la relación 1:n entre Cliente y Caso
Cliente.hasMany(Caso, {
    foreignKey: 'clienteId',
    as: 'casos' // Alias único para Casos
});

Caso.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'clienteCaso' // Alias único para Cliente desde Caso
});

// Definir la relación 1:n entre Cliente y Notificacion
Cliente.hasMany(Notificacion, {
    foreignKey: 'clienteId',
    as: 'notificaciones' // Alias único para Notificaciones
});

Notificacion.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'clienteNotificacion' // Alias único para Cliente desde Notificacion
});

// Definir la relación 1:n entre Caso y Tramite
Caso.hasMany(Tramite, {
    foreignKey: 'casoId',
    as: 'tramites' // Alias único para Tramites
});

Tramite.belongsTo(Caso, {
    foreignKey: 'casoId',
    as: 'casoTramite' // Alias único para Caso desde Tramite
});

// Exportar los modelos para usarlos en otras partes
module.exports = {
    Cliente,
    Turno,
    Tramite,
    Caso,
    Notificacion,
    User
};