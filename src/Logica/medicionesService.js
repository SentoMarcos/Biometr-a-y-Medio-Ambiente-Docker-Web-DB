// Logica/medicionesService.js
import pool from '../api/Config/database.js';

export const obtenerUltimaMedicion = async () => {
  const [result] = await pool.query('SELECT * FROM medidas ORDER BY fecha DESC LIMIT 1');
  if (result.length === 0) {
    throw new Error('No se encontraron mediciones');
  } else if (result.length > 1) {
    throw new Error('Error al obtener la última medición');
  }
  return result[0];
};

export const insertarMedicion = async (Lugar, Gas, Valor) => {
  const fecha = new Date();
  const [result] = await pool.query(
      'INSERT INTO medidas (fecha, Lugar, Gas, Valor) VALUES (?, ?, ?, ?)',
      [fecha, Lugar, Gas, Valor]
  );
  return result;
};

export const borrarUltimaMedicion = async () => {
  const [result] = await pool.query('DELETE FROM medidas ORDER BY fecha DESC LIMIT 1');
  return result;
};
