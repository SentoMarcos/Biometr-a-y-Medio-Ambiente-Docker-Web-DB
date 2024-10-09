// api/config/database.js
import { createPool } from 'mysql2/promise';
//ruta a env
import dotenv from 'dotenv';

dotenv.config();

// Crear el pool de conexiones con MySQL
const pool = createPool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '123456',
    database: process.env.DATABASE_NAME || 'mydb',
    port: process.env.DATABASE_PORT || 3306,
});


// Exportar el pool para ser utilizado en otros archivos
export default pool;
