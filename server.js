const app = require('./src/app');
const sequelize = require('./src/config/database');
const { PORT } = require('./src/config/env');

sequelize.sync()  // Sincroniza la DB
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('Error al conectar con la base de datos:', error));