const Usuario = require('../models/Usuario');

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // 👈 usamos directamente el modelo, sin inventar funciones
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
// Eliminar usuario por ID
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

// Editar usuario por ID
const editarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellidos, correo, contrasena } = req.body;
    await Usuario.findByIdAndUpdate(id, { nombre, apellidos, correo, contrasena });
    res.status(200).json({ mensaje: 'Usuario actualizado con éxito ✏️' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};


const procesarFormulario = async (req, res) => {
  try {
    const { nombre, apellidos, correo, contrasena } = req.body;
    const nuevoUsuario = new Usuario({ nombre, apellidos, correo, contrasena });
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
