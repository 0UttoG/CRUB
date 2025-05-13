const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const conectarDB = require('./db/connection');
const formularioRoutes = require('./routes/Formulario.routes');

const app = express();
const PORT = 3000;

// Middleware global
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Conectar a la base de datos
conectarDB();

// Rutas
app.use('/api', formularioRoutes);

// Ruta de confirmación
app.get('/gracias', (req, res) => {
  res.send('<h1>Gracias por registrarte!</h1><a href="/">Volver al inicio</a>');
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
