/**
 * @file index.js
 * @brief Servidor web para el proyecto de Biometría y Medio Ambiente
 **/
import express from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors'; // Importar CORS

/**
 * @brief Crear la aplicación de Express
 * @details Se crea la aplicación de Express y se configura para usar JSON y CORS
 **/
const app = express();
// Use the express.json() middleware to parse JSON bodies
app.use(express.json());
// Usar middleware CORS y Morgan
app.use(cors());

/**
 * @brief Crear el pool de conexiones con MySQL
 * @details Se crea el pool de conexiones con MySQL y se configura para conectarse a la base de datos "my
 * db" en el host "mysqldb" con el usuario "root" y la contraseña "123456".
 * @param host - El host de la base de datos.
 * @param user - El usuario de la base de datos.
 * @param password - La contraseña de la base de datos.
 * @param database - El nombre de la base de datos.
 * @param port - El puerto de la base de datos.
 * **/
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

/**
 * @brief Se redirige la ruta principal a "/index.html"
 * @details Se redirige la ruta principal a "/index.html" para que al ingresar a la dirección raíz de la
 * aplicación se cargue el archivo "index.html" de la carpeta "public".
 **/
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

/**
 * @function GET /mediciones
 * @brief Ruta para verificar la conexión a la base de datos (ping)
 * @details Se crea una ruta "/ping" que devuelve la fecha y hora actuales de la base de datos para verificar
 * que la conexión está funcionando correctamente.
 * @returns La fecha y hora actuales de la base de datos.
 * @throws Error 500 si hay un error al hacer ping a la base de datos.
 *
 * @example GET /ping
 * {
 *  "0": {
 *    "NOW()": "2021-10-20T00:00:00.000Z"
 *    }
 * }
 * **/
app.get('/ping', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT NOW()');
        res.json(result);
    } catch (error) {
        console.error('Error al hacer ping a la base de datos:', error.message);
        res.status(500).send('Error en la base de datos');
    }
});

/**
 * @brief Ruta para obtener la última medición
 * @details Se crea una ruta "/ultima-medicion" que devuelve la última medición registrada en la base de datos.
 * @returns La última medición registrada en la base de datos.
 * @throws Error 404 si no se encontraron mediciones.
 * @throws Error 500 si hay un error en la base de datos.
 *
 * @example GET /ultima-medicion
 * {
 *   "fecha": "2021-10-20T00:00:00.000Z",
 *   "Lugar": "Laboratorio",
 *   "Gas": "CO2",
 *   "Valor": 400
 *   }
 **/
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
/**
 * @brief Ruta para insertar una medición
 * @details Se crea una ruta "/insertar" que permite insertar una nueva medición en la base de datos.
 * @param Lugar - El lugar de la medición.
 * @param Gas - El tipo de gas medido.
 * @param Valor - El valor de la medición.
 * @returns Un mensaje de éxito o error en la inserción.
 * @throws Error 400 si faltan datos obligatorios.
 * @throws Error 500 si hay un error en el servidor.
 *
 * @example POST /insertar
 * {
 *    "Fecha": "2021-10-20T00:00:00.000Z",
 *    "Lugar": "Laboratorio",
 *    "Gas": "CO2",
 *    "Valor": 400
 * }
 * **/
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
