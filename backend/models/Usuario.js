const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  contrasena: String,
  Direccion: String,
 
});

module.exports = mongoose.model('Usuario', usuarioSchema);
