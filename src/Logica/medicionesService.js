// Logica/medicionesService.js
import pool from '../api/Config/database.js';

/**
 * @brief Obtiene la última medición registrada en la base de datos.
 *
 * Esta función realiza una consulta a la base de datos para obtener la última
 * medición almacenada, ordenando por fecha de manera descendente.
 *
 * @throws Error Si no se encuentran mediciones o si se obtienen múltiples resultados.
 * @return {Object} Un objeto que representa la última medición, incluyendo los campos
 * `Lugar`, `Gas`, `Valor` y `fecha`.
 */
export const obtenerUltimaMedicion = async () => {
  const [result] = await pool.query('SELECT * FROM medidas ORDER BY fecha DESC LIMIT 1');
  if (result.length === 0) {
    throw new Error('No se encontraron mediciones');
  } else if (result.length > 1) {
    throw new Error('Error al obtener la última medición');
  }
  return result[0];
};

/**
 * @brief Inserta una nueva medición en la base de datos.
 *
 * Esta función inserta una nueva fila en la tabla de medidas con los valores proporcionados
 * para lugar, tipo de gas y valor de medición. La fecha se genera automáticamente en el momento de la inserción.
 *
 * @param {String} Lugar El lugar donde se realizó la medición.
 * @param {String} Gas El tipo de gas medido.
 * @param {Number} Valor El valor medido del gas.
 * @return {Object} El resultado de la operación, que incluye información sobre las filas afectadas.
 */
export const insertarMedicion = async (Lugar, Gas, Valor) => {
  const fecha = new Date();
  const [result] = await pool.query(
      'INSERT INTO medidas (fecha, Lugar, Gas, Valor) VALUES (?, ?, ?, ?)',
      [fecha, Lugar, Gas, Valor]
  );
  return result;
};

/**
 * @brief Elimina la última medición registrada en la base de datos.
 *
 * Esta función elimina la última fila de la tabla de medidas, ordenada por fecha
 * de manera descendente.
 *
 * @return {Object} El resultado de la operación de eliminación, incluyendo información
 * sobre las filas afectadas.
 */
export const borrarUltimaMedicion = async () => {
  const [result] = await pool.query('DELETE FROM medidas ORDER BY fecha DESC LIMIT 1');
  return result;
};
