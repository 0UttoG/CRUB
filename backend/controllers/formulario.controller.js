const Usuario = require('../models/Usuario');

/**
 * Obtiene todos los usuarios de la base de datos.
 * @param {object} req - El objeto de solicitud de Express.
 * @param {object} res - El objeto de respuesta de Express.
 * @returns {void}
 */
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // 👈 usamos directamente el modelo, sin inventar funciones
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
/**
 * Elimina un usuario de la base de datos por su ID.
 * @param {object} req - El objeto de solicitud de Express.
 * @param {object} res - El objeto de respuesta de Express.
 * @returns {void}
 */
const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.status(200).json({ mensaje: 'Usuario eliminado con éxito 🗑️' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

/**
 * Edita un usuario en la base de datos por su ID.
 * @param {object} req - El objeto de solicitud de Express.
 * @param {object} res - El objeto de respuesta de Express.
 * @returns {void}
 */
const editarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellidos, correo, contrasena, Direccion} = req.body;
    await Usuario.findByIdAndUpdate(id, { nombre, apellidos, correo, contrasena, Direccion });
    res.status(200).json({ mensaje: 'Usuario actualizado con éxito ✏️' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

/**
 * Procesa el formulario de registro de un nuevo usuario.
 * @param {object} req - El objeto de solicitud de Express.
 * @param {object} res - El objeto de respuesta de Express.
 * @returns {void}
 */
const procesarFormulario = async (req, res) => {
  try {
    const { nombre, apellidos, correo, contrasena, Direccion} = req.body;
    const nuevoUsuario = new Usuario({ nombre, apellidos, correo, contrasena, Direccion});
    await nuevoUsuario.save();

    res.status(200).json({ mensaje: 'Usuario registrado con éxito 🚀' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar el usuario 😵' });
  }
};

module.exports = {
  procesarFormulario,
  obtenerUsuarios,
  eliminarUsuario,
  editarUsuario // 👈 exporta bien
};
