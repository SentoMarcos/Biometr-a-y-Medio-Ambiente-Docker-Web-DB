// api/routes/measurementRoutes.js
import { Router } from 'express';
import { pingDB, getUltimaPeticion, setMedicion, borrarUltimaMedicion } from '../CTR/PeticionesCTR.js';

const router = Router();

// Ruta para hacer ping a la base de datos
router.get('/ping', pingDB);

// Ruta para obtener la última medición
router.get('/ultima-medicion', getUltimaPeticion);

// Ruta para insertar una nueva medición
router.post('/insertar', setMedicion);

//ruta para borra la ultima medicion
router.delete('/borrar', borrarUltimaMedicion);

export default router;
