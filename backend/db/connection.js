const mongoose = require('mongoose');

/**
 * Establece una conexión con la base de datos MongoDB.
 * @async
 * @function conectarDB
 * @returns {Promise<void>} Una promesa que se resuelve cuando la conexión se establece correctamente.
 * @throws {Error} Si no se puede conectar a la base de datos.
 */
const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/DSSF', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

module.exports = conectarDB;
