![Logo](https://raw.githubusercontent.com/Caarlos94/Proff/master/client/src/img/home.png)

# Individual Project - Proff

Este es un proyecto basico en el que se creo una pequeña base de datos con ayuda de Firebase.

Entre las funcionalidades de esta app están: mostrar tarjetas con la información de profesores, darse de alta como profesor a través de un formulario, 
filtrarlos los profesores por materia, horario y día.

## Stack de Tecnologías

### Front End:
- HTML, CSS, Javascript, React, Redux.

### Back End:
- Node.js, Express, Sequelize.

### Database:
- PostgreSQL, Firebase

## Funcionalidades

- Filtrar profesores por materia, dia y horario.
- Muestra los detalles de cada profesor en tarjetas.
- Darse de alta como profesor a través de un formulario.

## **Intrucciones para Comenzar** 

__IMPORTANTE:__ Versiones necesarias de Node y NPM 

 * __Node__: 12.18.3 o superior
 * __NPM__: 6.14.16 o superior
 
## BoilerPlate

El boilerPlate tiene dos carpetas: `server` and `client`.

Dentro de `api` se debe crear un archivo llamado `.env` con la siguiente estructura: 
```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost
```
Debes reemplazar `postgresuser` y `postgrespassword` por tus propias credeciales para conectar a la base de datos de postgreSQL. Este archivo `.env` será ignorado por github debido a que contene información sensible (las credenciales).

## Posteriormente
### _Conectar con la base de datos_

 - Dirigete a postgreSQL para crear una nueva base de datos lamada `proff`, este es el nombre de la base de datos a la cual nos conectaremos.

### _Instala los package necesarios para correr el proyecto_

- Abre la consola del proyecto
    + Dentro de la carpeta `server`, escribe la siguiente linea de comando en la consola `npm install`.
    + Dentro de la carpeta `client`, escribe la siguiente linea de comando en la consola `npm install`.

### _Corre el proyecto_

- Abre la consola del proyecto
    + Dentro de la carpeta `server`, escribe la siguiente linea de comando en la consola `npm start`.
    +  Dentro de la carpeta `client`, escribe la siguiente linea de comando en la consola `npm start`.
    +  Dirigete a  http://localhost:3000/ en tu navegador favorito. 

## Capturas de Pantalla

- Main

![main](https://raw.githubusercontent.com/Caarlos94/Proff/master/client/src/img/home.png)

- Formulario Posterior

![form](https://raw.githubusercontent.com/Caarlos94/Proff/master/client/src/img/form1.png)

- Formulario Inferior

![form](https://raw.githubusercontent.com/Caarlos94/Proff/master/client/src/img/form2.png)

- Listado Vacio

![listado](https://raw.githubusercontent.com/Caarlos94/Proff/master/client/src/img/listadoVacio.png)

- Detalle del Profesor

![detalle](https://raw.githubusercontent.com/Caarlos94/pokemon/master/client/src/img/cards.png)

