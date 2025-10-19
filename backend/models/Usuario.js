const mongoose = require('mongoose');

/**
 * @typedef {object} Usuario
 * @property {string} nombre - El nombre del usuario.
 * @property {string} apellidos - Los apellidos del usuario.
 * @property {string} correo - El correo electrónico del usuario.
 * @property {string} contrasena - La contraseña del usuario.
 * @property {string} Direccion - La dirección del usuario.
 */

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  contrasena: String,
  Direccion: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);
