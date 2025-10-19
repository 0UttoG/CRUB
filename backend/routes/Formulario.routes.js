const express = require('express');
const router = express.Router();

// Asegúrate de importar todas las funciones que necesitas desde el controlador
const { 
  procesarFormulario, 
  obtenerUsuarios, 
  eliminarUsuario,  // Importa esta función
  editarUsuario     // Importa esta función
} = require('../controllers/formulario.controller');

/**
 * @route POST /formulario
 * @description Procesa el formulario de registro de un nuevo usuario.
 * @access Public
 */
router.post('/formulario', procesarFormulario);  // Ruta para procesar el formulario
/**
 * @route GET /usuarios
 * @description Obtiene todos los usuarios de la base de datos.
 * @access Public
 */
router.get('/usuarios', obtenerUsuarios);      // Ruta para obtener todos los usuarios
/**
 * @route DELETE /usuarios/:id
 * @description Elimina un usuario de la base de datos por su ID.
 * @access Public
 */
router.delete('/usuarios/:id', eliminarUsuario);  // Ruta para eliminar usuario
/**
 * @route PUT /usuarios/:id
 * @description Edita un usuario en la base de datos por su ID.
 * @access Public
 */
router.put('/usuarios/:id', editarUsuario);     // Ruta para editar usuario

module.exports = router;
