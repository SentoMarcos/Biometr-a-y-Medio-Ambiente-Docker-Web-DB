// api/controllers/measurementController.js
import pool from '../Config/database.js';
import { obtenerUltimaMedicion, insertarMedicion } from '../../Logica/medicionesService.js';


export const pingDB = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT NOW()');
        res.json(result);
    } catch (error) {
        console.error('Error al hacer ping a la base de datos:', error.message);
        res.status(500).send('Error en la base de datos');
    }
};


export const getUltimaPeticion = async (req, res) => {
    try {
        const ultimaMedicion = await obtenerUltimaMedicion();
        res.json(ultimaMedicion);
    } catch (error) {
        console.error('Error al obtener la última medición:', error.message);
        res.status(500).send('Error en la base de datos');
    }
};


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
