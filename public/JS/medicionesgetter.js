/**
 * @file medicionesgetter.js
 * @brief Funciones para obtener mediciones de la base de datos y mostrarlas en la página web.
 * @details Este archivo contiene funciones para obtener mediciones de la base de datos y mostrarlas en la página web.
 * **/

/**
 * @function getUltimaMedicion
 * @brief Obtiene la última medición registrada en la base de datos.
 * @details Realiza una petición GET a la ruta "/ultima-medicion" para obtener la última medición registrada en la base de datos.
 * @returns La última medición registrada en la base de datos.
 * @throws Error si hay un error al obtener la última medición.
 * **/
const getUltimaMedicion = async () => {
    try {
        const response = await fetch('/ultima-medicion');
        if (!response.ok) {
            throw new Error('Error al obtener la última medición');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener la última medición:', error);
        return null;
    }
};
/**
 * @interface Botón para obtener la última medición
 * @brief Interfaz para obtener la última medición registrada en la base de datos.
 * **/
//darle al boton y cambiar el texto h1 por la ultima medicion
const boton = document.getElementById('btn-ultima-medicion');
/**
 * @interface Texto para mostrar la última medición
 * @brief Interfaz para mostrar la última medición registrada en la base de datos.
 * **/
const texto = document.getElementById('texto-medicion');
/**
 * @function Evento click del botón para obtener la última medición
 * @brief Evento click del botón para obtener la última medición registrada en la base de datos.
 * @details Al hacer click en el botón, se obtiene la última medición registrada en la base de datos y se muestra en la página web.
 * **/
boton.addEventListener('click', async () => {
    const medicion = await getUltimaMedicion();
    if (medicion) {
        texto.textContent = `Ultima medicion: ${medicion.fecha} - Lugar: ${medicion.Lugar} - Gas: ${medicion.Gas} - Valor: ${medicion.Valor}`;
    } else {
        texto.textContent = 'Error al obtener la última medición';
    }
} );
