const mongoose = require('mongoose');

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
