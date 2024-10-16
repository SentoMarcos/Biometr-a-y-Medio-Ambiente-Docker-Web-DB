/**
 * @file index.js
 * @brief Archivo principal para iniciar el servidor.
 * */
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import PeticionesRutas from './api/Rutas/PeticionesRutas.js';


// Crear la aplicación express
const app = express();

// Configuraciones de middleware
app.use(express.json());
app.use(cors());

// Configuración para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', PeticionesRutas); // Usar rutas bajo el prefijo /api
6//app.use('/api', PeticionesRutas); // Usar rutas bajo el prefijo /api
/**
 * @brief Ruta principal
 * */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}/`);
});
