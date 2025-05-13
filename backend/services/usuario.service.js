const Usuario = require('../models/Usuario');

// Servicio para obtener todos los usuarios
const obtenerUsuariosDB = async () => {
  return await Usuario.find();
};

module.exports = {
  obtenerUsuariosDB
};
