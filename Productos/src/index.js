const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes');
require('dotenv').config(); //Carga las variables de entorno desde el archivo .env
const cors = require('cors'); // Importa el middleware de CORS

const app = express();

let limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 1000, // 1000 solicitudes
  message: 'Has excedido el numero de solicitudes permitidas. Por favor, intenta de nuevo más tarde.',
});

// Configurar Express para servir archivos estáticos
app.use(express.static('public'));

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api', limiter);

//Rutas
app.use('/api', librosRoutes);

//Manejador de rutas para manejar rutas no definidas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API :D');
});

//Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT} `);
});