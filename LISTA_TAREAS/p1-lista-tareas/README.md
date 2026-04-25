# Aplicación de lista de tareas con REACT ✏📋

Aplicación web desarrollada con React que permite a los usuarios gestionar una lista de tareas.
Pudiendo hacer distintas acciones en la lista:
- Añadir tareas con un título y una descripción (se añadirán como pendiente a la lista).
- Marcar una tarea del listado como completada o pendiente.
- Eliminar una tarea del listado.
- Filtrar todas las tareas y también por su estado: completadas o pendientes.

Esta lista de tareas se ha implemplementado con localStorage, por tanto, los datos serán persistentes en el navegador del usuario.


## Instrucciones para ejecutar el proyecto y las pruebas 
### Proyecto
1. Clonar repositorio:
git clone https://github.com/Vero7nicaRS/lista-tareas-react.git
2. Instalar dependencias:
npm install
2. Ejecutar la aplicación:
npm run dev
3. Abrir la ruta que se proporciona al ejecutar la aplicación.

### Pruebas
1. Ejecutar las pruebas:
npm run test


## Explicación de la estructura del proyecto
- node_modules: contiene todas las dependencias del proyecto.
- public: tiene imágenes del proyecto.
- README.md: información del proyecto.
- vite.config.js: configuración de los test.
- index.html: HTML base de la aplicación, contiene el "div" con el elemento "root.

Hay distintas carpetas a lo largo del proyecto localizadas en "src":
- assets: contiene el logo de la aplicación.
- components: son los componentes de la aplicación y también contiene los test realizados para comprobar
el correcto funcionamiento de los componentes.
- context: contexto que provee el estado y funciones al resto de la aplicación.
- hooks: devuelve las funciones necesarias para añadir, marcar y eliminar una tarea del listado. También,
están los test que se han realizado para el hook.

También, hay otros ficheros en "src" que no están en ninguna carpeta como:
- App.css: es el CSS de la aplicación.
- App.jsx: contiene la lógica de la aplicación
- Index.css: es la raíz del proyecto.
- main.jsx: es la raíz del proyecto React, es donde se renderiza la aplicación en el DOM.
- setupTests.jsx: configuración del entorno de pruebas.

## 

## Manejo de estado complejo
En esta práctica se ha utilizado `useState` dentro del custom hook `useTasks`, junto con React Context para compartir el estado entre componentes.

Hay que resaltar que no se ha implementado `useReducer` porque la lógica actual de la aplicación es sencilla: añadir, eliminar, marcar y filtrar tareas. Estas operaciones se gestionan fácilmente utilizando `useState`.

No obstante, si la aplicación creciera en complejidad, por ejemplo teniendo que ordenaciones por nombre de tarea o fechas, incluir fechas límite para llevarlas a cabo las distintas tareas... En estos casos, sería conveniente utilizar `useReducer`, para centralizar las acciones a través de un reducer.