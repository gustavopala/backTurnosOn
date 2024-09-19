require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'mi_base_de_datos',
  DB_USER: process.env.DB_USER || 'mi_usuario',
  DB_PASSWORD: process.env.DB_PASSWORD || 'mi_contraseña',
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'tu_secreto',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET
};

