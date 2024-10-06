//Recoger la ultima medicion de la base de datos

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

//darle al boton y cambiar el texto h1 por la ultima medicion
const boton = document.getElementById('btn-ultima-medicion');
const texto = document.getElementById('texto-medicion');

boton.addEventListener('click', async () => {
    const medicion = await getUltimaMedicion();
    if (medicion) {
        texto.textContent = `Ultima medicion: ${medicion.fecha} - Lugar: ${medicion.Lugar} - Gas: ${medicion.Gas} - Valor: ${medicion.Valor}`;
    } else {
        texto.textContent = 'Error al obtener la última medición';
    }
} );
