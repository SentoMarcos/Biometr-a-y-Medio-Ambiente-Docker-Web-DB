import express from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors'; // Importar CORS

const app = express();
// Use the express.json() middleware to parse JSON bodies
app.use(express.json());
// Usar middleware CORS y Morgan
app.use(cors());

// Crear el pool de conexiones con MySQL
const pool = createPool({
    host: 'mysqldb',  // Cambiar a 'localhost' o '127.0.0.1' si es necesario
    user: 'root',
    password: '123456',
    database: 'mydb',  // Asegúrate de que el nombre de la base de datos esté correcto
    port: 3306,
});

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Redirigir la ruta principal a "/index.html"
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Ruta para verificar la conexión a la base de datos (ping)
app.get('/ping', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT NOW()');
        res.json(result);
    } catch (error) {
        console.error('Error al hacer ping a la base de datos:', error.message);
        res.status(500).send('Error en la base de datos');
    }
});

// Ruta para obtener la última medición
app.get('/ultima-medicion', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM medidas ORDER BY fecha DESC LIMIT 1');
        if (result.length === 0) {
            return res.status(404).json({ error: 'No se encontraron mediciones' });
        }
        res.json(result[0]); // Devuelve el primer resultado
    } catch (error) {
        console.error('Error al obtener la última medición:', error.message);
        res.status(500).send('Error en la base de datos');
    }
});

app.post('/insertar', async (req, res) => {
    try {
        const { Lugar, Gas, Valor } = req.body; // Obtenemos Lugar, Gas, y Valor del body

        if (!Lugar || !Gas || !Valor) {
            return res.status(400).send('Faltan datos obligatorios');
        }

        // Generamos la fecha actual
        const fecha = new Date();

        // Insertamos la medición en la base de datos
        const [result] = await pool.query(
            'INSERT INTO medidas (fecha, Lugar, Gas, Valor) VALUES (?, ?, ?, ?)',
            [fecha, Lugar, Gas, Valor]
        );

        res.status(201).send('Medición insertada correctamente');
    } catch (error) {
        console.error('Error al insertar la medición:', error.message);
        res.status(500).send('Error en el servidor');
    }
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
