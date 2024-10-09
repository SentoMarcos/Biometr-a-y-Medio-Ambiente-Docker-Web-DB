/**
 * @file PeticionesRutas.js
 * @brief Rutas para gestionar las peticiones a la base de datos.
 * @details Este archivo contiene las rutas para gestionar las peticiones a la base de datos.
 * */
import { Router } from 'express';
import { pingDB, getUltimaPeticion, setMedicion, borrarUltimaMedicion } from '../CTR/PeticionesCTR.js';

const router = Router();

/**
 * @brief Ruta para verificar la conectividad con la base de datos.
 *
 * Esta ruta responde a las peticiones GET enviadas a `/ping` y ejecuta
 * la función `pingDB` para comprobar si la base de datos está operativa.
 *
 * @route GET /ping
 */
router.get('/ping', pingDB);

/**
 * @brief Ruta para obtener la última medición registrada.
 *
 * Esta ruta responde a las peticiones GET enviadas a `/ultima-medicion` y ejecuta
 * la función `getUltimaPeticion` para devolver la última medición almacenada en la base de datos.
 *
 * @route GET /ultima-medicion
 */
router.get('/ultima-medicion', getUltimaPeticion);

/**
 * @brief Ruta para insertar una nueva medición.
 *
 * Esta ruta responde a las peticiones POST enviadas a `/insertar` y ejecuta
 * la función `setMedicion`, que inserta una nueva medición en la base de datos.
 * Los datos de la medición se deben enviar en el cuerpo de la solicitud.
 *
 * @route POST /insertar
 */
router.post('/insertar', setMedicion);

/**
 * @brief Ruta para borrar la última medición registrada.
 *
 * Esta ruta responde a las peticiones DELETE enviadas a `/borrar` y ejecuta
 * la función `borrarUltimaMedicion` para eliminar la última medición en la base de datos.
 *
 * @route DELETE /borrar
 */
router.delete('/borrar', borrarUltimaMedicion);

export default router;
