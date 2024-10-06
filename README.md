
# **Biometría y Medio Ambiente - Web**

Este proyecto es una plataforma web diseñada para el monitoreo de datos biométricos y ambientales. Permite la visualización y análisis de estos datos en tiempo real a través de una interfaz web amigable. Está construida utilizando tecnologías modernas como PHP para el backend, JavaScript para el frontend y Docker para la gestión de contenedores.

## **Tecnologías Utilizadas**
- **Backend:** PHP
- **Frontend:** JavaScript, HTML, CSS
- **Contenedores:** Docker, Docker Compose
- **Gestor de dependencias:** npm
- **Base de datos:** MySQL

## **Instalación y Configuración**

### **Prerrequisitos**
1. **Docker**: Asegúrate de tener Docker instalado en tu sistema. [Instalar Docker](https://www.docker.com/get-started).
2. **Node.js y npm**: Instala [Node.js](https://nodejs.org/) y npm para gestionar las dependencias del frontend.

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


## **Autores**
- [SentoMarcos](https://github.com/SentoMarcos)

## **Proyectos Relacionados**
- [Biometría y Medio Ambiente - Android](https://github.com/SentoMarcos/Biometr-a-y-Medio-Ambiente-Android)
- [Biometría y Medio Ambiente - Arduino](https://github.com/SentoMarcos/Biometr-a-y-Medio-Ambiente-Arduino)
