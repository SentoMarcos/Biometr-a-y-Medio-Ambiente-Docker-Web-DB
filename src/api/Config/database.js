/**
 * @fileoverview Archivo de configuración de la base de datos MySQL
 * @description Este archivo contiene la configuración necesaria para establecer
 *
 * */
import { createPool } from 'mysql2/promise';
//ruta a env
import dotenv from 'dotenv';


dotenv.config();

/**
 * @const pool
 * @description Crear un pool de conexiones a la base de datos MySQL
 * @type {Pool}
 * @requires mysql2/promise
 * @requires dotenv
 * @param {Object} host - Host de la base de datos
 * @param {Object} user - Usuario de la base de datos
 * @param {Object} password - Contraseña de la base de datos
 * @param {Object} database - Nombre de la base de datos
 * @param {Object} port - Puerto de la base de datos
 * */
const pool = createPool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '123456',
    database: process.env.DATABASE_NAME || 'mydb',
    port: process.env.DATABASE_PORT || 3306,
});


// Exportar el pool para ser utilizado en otros archivos
export default pool;
