# **Biometría y Medio Ambiente - Web**

Este proyecto es una plataforma web diseñada para el monitoreo de datos biométricos y ambientales. Permite la visualización y análisis de estos datos en tiempo real a través de una interfaz web amigable. Está construida utilizando tecnologías modernas como PHP para el backend, JavaScript para el frontend y Docker para la gestión de contenedores.

## **Tecnologías Utilizadas**
- **Backend:** PHP
- **Frontend:** JavaScript, HTML, CSS
- **Contenedores:** Docker, Docker Compose
- **Gestor de dependencias:** npm
- **Base de datos:** MySQL
- **Testing:** Mocha, Chai (para pruebas unitarias en JavaScript)

## **Instalación y Configuración**

### **Prerrequisitos**
1. **Docker**: Asegúrate de tener Docker instalado en tu sistema. [Instalar Docker](https://www.docker.com/get-started).
2. **Node.js y npm**: Instala [Node.js](https://nodejs.org/) y npm para gestionar las dependencias del frontend.
3. **MySQL Workbench (opcional)**: Si deseas visualizar y gestionar la base de datos localmente.

### **Instalación**

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/SentoMarcos/Biometr-a-y-Medio-Ambiente-Docker-Web-DB.git
   ```

2. **Accede al directorio del proyecto**:
   ```bash
   cd Biometr-a-y-Medio-Ambiente-Docker-Web-DB
   ```

3. **Instala las dependencias del frontend**:
   Ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```bash
   npm install
   ```

4. **Construye y ejecuta los contenedores con Docker**:
   Usa Docker Compose para construir y levantar todos los servicios:
   ```bash
   docker-compose up --build
   ```

5. **Accede a la aplicación**:
   Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación web en tu navegador en la URL: `http://localhost:8000` (o el puerto especificado en el archivo `docker-compose.yml`).

### **Configuración de Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias para la configuración de la base de datos y otros servicios. Aquí tienes un ejemplo:

```
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=biometria
```

Estas variables de entorno serán utilizadas por Docker para la configuración de los servicios internos.

## **Ejecución de Pruebas**

Este proyecto incluye pruebas unitarias utilizando Mocha y Chai para asegurar la calidad del código.

### **Pasos para Ejecutar las Pruebas**:

1. **Configura las Variables de Entorno para las Pruebas**:
   Crea un archivo `.env.test` en la raíz del proyecto con las configuraciones de la base de datos de prueba, similar al archivo `.env`. Un ejemplo sería:

   ```
   DB_HOST=db
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=biometria_test
   ```

2. **Ejecuta las Pruebas**:
   Una vez configuradas las variables de entorno, ejecuta el siguiente comando para correr las pruebas:

   ```bash
   npm test
   ```

   Este comando buscará y ejecutará todos los archivos de prueba definidos en la carpeta `test`, validando el comportamiento de las funcionalidades clave, como inserción y eliminación de datos en la base de datos.

3. **Verifica los Resultados**:
   Al finalizar, se mostrará un resumen de las pruebas ejecutadas y sus resultados en la consola.

### **Pruebas de Cobertura (Opcional)**

Si deseas ejecutar las pruebas y obtener un reporte de cobertura de código, puedes utilizar `nyc` (que ya está instalado con las dependencias de desarrollo):

```bash
npm run coverage
```

Esto generará un reporte de cobertura que te permitirá ver qué partes del código están siendo cubiertas por las pruebas.

## **Documentación del Código**

El proyecto también está preparado para generar documentación automática utilizando Doxygen. Para generar la documentación:

1. **Instala Doxygen**: Si aún no lo tienes instalado, puedes hacerlo desde [aquí](https://www.doxygen.nl/download.html).

2. **Genera la documentación**:
   Desde la raíz del proyecto, ejecuta el siguiente comando:

   ```bash
   doxygen Doxyfile
   ```

   Esto generará la documentación en el formato especificado en el archivo `Doxyfile`, que puede ser en HTML o LaTeX.

## **Autenticación y Seguridad**

- Asegúrate de configurar las credenciales de base de datos y otras variables sensibles en un archivo `.env`, nunca directamente en el código fuente.
- Para producción, utiliza contraseñas seguras y considera habilitar HTTPS en tu servidor web para garantizar la seguridad en la transmisión de datos.

## **Autores**
- [SentoMarcos](https://github.com/SentoMarcos)

## **Proyectos Relacionados**
- [Biometría y Medio Ambiente - Android](https://github.com/SentoMarcos/Biometr-a-y-Medio-Ambiente-Android)
- [Biometría y Medio Ambiente - Arduino](https://github.com/SentoMarcos/Biometr-a-y-Medio-Ambiente-Arduino)
