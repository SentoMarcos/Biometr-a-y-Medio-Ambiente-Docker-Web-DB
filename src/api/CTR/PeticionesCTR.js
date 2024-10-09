/**
 *  @file PeticionesCTR.js
 *  @brief Controladores para gestionar las peticiones a la base de datos.
 *  @details Este archivo contiene los controladores para gestionar las peticiones a la base de datos.
 * */
import pool from '../Config/database.js';
import { obtenerUltimaMedicion, insertarMedicion } from '../../Logica/medicionesService.js';

/**
 * @brief Realiza un ping a la base de datos.
 *
 * Esta función realiza una consulta a la base de datos para comprobar si está operativa.
 *
 * @param {Object} req La solicitud HTTP.
 * @param {Object} res La respuesta HTTP.
 */
export const pingDB = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT NOW()');
        res.json(result);
    } catch (error) {
        console.error('Error al hacer ping a la base de datos:', error.message);
        res.status(500).send('Error en la base de datos');
    }
};

/**
 * @brief Obtiene la última medición registrada en la base de datos.
 *
 * Esta función obtiene la última medición registrada en la base de datos.
 *
 * @param {Object} req La solicitud HTTP.
 * @param {Object} res La respuesta HTTP.
 */

export const getUltimaPeticion = async (req, res) => {
    try {
        const ultimaMedicion = await obtenerUltimaMedicion();
        res.json(ultimaMedicion);
    } catch (error) {
        console.error('Error al obtener la última medición:', error.message);
        res.status(500).send('Error en la base de datos');
    }
};

/**
 * @brief Inserta una nueva medición en la base de datos.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */

export const setMedicion = async (req, res) => {
    try {
        const { Lugar, Gas, Valor } = req.body;
        if (!Lugar || !Gas || !Valor) {
            return res.status(400).send('Faltan datos obligatorios');
        }
        await insertarMedicion(Lugar, Gas, Valor);
        res.status(201).send('Medición insertada correctamente');
    } catch (error) {
        console.error('Error al insertar la medición:', error.message);
        res.status(500).send('Error en el servidor');
    }
};

//borrar ultima medicion

export const borrarUltimaMedicion = async (req, res) => {
    try {
        await borrarUltimaMedicion();
        res.status(204).send('Medición borrada correctamente');
    } catch (error) {
        console.error('Error al borrar la medición:', error.message);
        res.status(500).send('Error en el servidor');
    }
}
