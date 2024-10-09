/**
 * @file testMediciones.js
 * @brief Pruebas unitarias para los servicios de mediciones.
 *
 * Este archivo contiene pruebas unitarias para las funciones de medición,
 * incluyendo la obtención, inserción y eliminación de mediciones.
 */

import { expect } from 'chai';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env.test
dotenv.config({ path: '.env.test' });

import { obtenerUltimaMedicion, insertarMedicion, borrarUltimaMedicion } from '../src/Logica/medicionesService.js';

/**
 * @brief Conjunto de pruebas para los servicios de medición.
 */
describe('Servicios de Medición', () => {

    /**
     * @brief Prueba para obtener la última medición correctamente.
     *
     * Esta prueba verifica que la función `obtenerUltimaMedicion` retorna un objeto
     * que contiene las propiedades `Lugar`, `Gas` y `Valor`.
     */
    it('Debe obtener la última medición correctamente', async () => {
        const medicion = await obtenerUltimaMedicion();
        expect(medicion).to.have.property('Lugar');
        expect(medicion).to.have.property('Gas');
        expect(medicion).to.have.property('Valor');
    });

    /**
     * @brief Prueba para insertar una nueva medición correctamente.
     *
     * Esta prueba verifica que la función `insertarMedicion` inserta una nueva medición
     * y retorna un resultado que indica que una fila fue afectada.
     */
    it('Debe insertar una nueva medición correctamente', async () => {
        const result = await insertarMedicion('Laboratorio', 'CO2', 23.5);
        expect(result.affectedRows).to.equal(1);
    });

    /**
     * @brief Prueba para borrar la última medición.
     *
     * Esta prueba inserta una nueva medición y luego verifica que la función `borrarUltimaMedicion`
     * la elimina correctamente, afectando a una fila.
     */
    it('Debe borrar la última medición', async () => {
        await insertarMedicion('Laboratorio', 'O3', 30.0);
        const result = await borrarUltimaMedicion();
        expect(result.affectedRows).to.equal(1);
        const medicionBorrada = await obtenerUltimaMedicion();
        expect(medicionBorrada).to.have.property('Lugar', 'Laboratorio');
    });
});
