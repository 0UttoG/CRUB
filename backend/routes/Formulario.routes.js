const express = require('express');
const router = express.Router();

// Asegúrate de importar todas las funciones que necesitas desde el controlador
const { 
  procesarFormulario, 
  obtenerUsuarios, 
  eliminarUsuario,  // Importa esta función
  editarUsuario     // Importa esta función
} = require('../controllers/formulario.controller');

// Rutas
router.post('/formulario', procesarFormulario);  // Ruta para procesar el formulario
router.get('/usuarios', obtenerUsuarios);      // Ruta para obtener todos los usuarios
router.delete('/usuarios/:id', eliminarUsuario);  // Ruta para eliminar usuario
router.put('/usuarios/:id', editarUsuario);     // Ruta para editar usuario

module.exports = router;
