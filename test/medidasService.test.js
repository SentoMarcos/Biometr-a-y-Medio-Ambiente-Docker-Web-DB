import { expect } from 'chai';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env.test
dotenv.config({ path: '.env.test' });

import { obtenerUltimaMedicion, insertarMedicion, borrarUltimaMedicion } from '../src/Logica/medicionesService.js';

describe('Servicios de Medición', () => {
    it('Debe obtener la última medición correctamente', async () => {
        const medicion = await obtenerUltimaMedicion();
        expect(medicion).to.have.property('Lugar');
        expect(medicion).to.have.property('Gas');
        expect(medicion).to.have.property('Valor');
    });

    it('Debe insertar una nueva medición correctamente', async () => {
        const result = await insertarMedicion('Laboratorio', 'CO2', 23.5);
        expect(result.affectedRows).to.equal(1);
    });

    // Borrar última medición
    it('Debe borrar la última medición', async () => {
        await insertarMedicion('Laboratorio', 'O3', 30.0);
        const result = await borrarUltimaMedicion();
        expect(result.affectedRows).to.equal(1);
        const medicionBorrada = await obtenerUltimaMedicion();
        expect(medicionBorrada).to.have.property('Lugar', 'Laboratorio');
    });
});
