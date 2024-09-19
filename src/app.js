const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',  // Origen permitido
  credentials: true,  // Permitir envío de credenciales
};

app.use(cors(corsOptions));  // Aplicar configuración CORS
app.use(morgan('dev'));
app.use(express.json());  // Parsear JSON
app.use('/api', routes);  // Todas las rutas inician con /api
app.use(errorHandler);  // Manejo de errores global

module.exports = app;