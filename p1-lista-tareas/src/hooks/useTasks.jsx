/* ----------------------------------------------------------------------------------------
                                        useTasks 
                                        --------
- Es un HOOK: 
    - Empieza por "use".
    - No devuelve código JSX porque NO son componentes. Por tanto, en el return habrá datos y funciones "{...}" necesarias.
- Se encarga de hacer el CRUD de tareas. 
-------------------------------------------------------------------------------------------
*/
import { useEffect, useState } from "react";
function useTasks() {

/*    const [tareas, setTareas] = useState([
        { id: 1, titulo: 'Limpiar', descripcion:"Trapos", completada: false },
        { id: 2, titulo: 'Barrer', descripcion:"Se necesita escoba y recogedor", completada: true },
        { id: 3, titulo: 'Fregar', descripcion:"", completada: false }, 
    ]) 

*/

    /* Utilizar "localStorage" para guardar las tareas en el navegador.
       El estado de las tareas se obtiene del "localStorage" cuando se carga la aplicación,
       y se va a guardar en el "localStorage" cada vez que se actualice el estado de las tareas.
       El localstorage solo puede almacenar texto (string). 
       Por tanto, se tiene que utilizar JSON.stringify y JSON.parse. 
    */
    const [tareas, setTareas] = useState(() => {
        // Se obtiene el estado de las tareas del "localStorage".
        const tareasGuardadas = localStorage.getItem("tareas");
        /* Si hay tareas guardadas, se "convierten" y se devuelven. 
         * Si no, se devuelve un array vacío de tareas.
        */
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    });

    /* Se utiliza "useEffect" para que cada vez que se actualice el estado de las tareas,
       se guarden las tareas en el "localStorage".
    */
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    // Función para agregar una nueva tarea al listado de TO-DO-LIST.
    const agregarTarea = (titulo, descripcion) => {
        if (!titulo.trim()) return;
            setTareas((prev) => [  /* prev: tareas que hay en el listado (valor actual del estado en ese momento)*/
                ...prev, 
                { id: Date.now(), titulo, descripcion, completada: false },
            ]);
    };

    // Función para eliminar una tarea del listado de TO-DO-LIST.
    // Se filtra el listado de tareas por aquellas que NO tengan el mismo ID.
    const eliminarTarea = (id) => {
        setTareas((prev) => prev.filter((tarea) => tarea.id !== id))
    }

 /*  Función para cambiar una tarea de manera completa, es decir, modificando su título, descripción y estado.
     Se recorren todas las tareas-
     Si la tarea tiene el id, se modifica la tarea.
     Si no, se deja igual.
    const cambiarTarea = (id, nuevoTitulo, nuevaDescripcion, estado) => {
        setTareas((prev) => 
            prev.map((tarea) => 
                tarea.id == id ? {...tarea, titulo: nuevoTitulo , descripcion: nuevaDescripcion, completada: estado} : tarea
            )
        );
    }
*/
    // Función para marcar una tarea como completada o pendiente.
    // Se recorren todas las tareas. 
    // Si la tarea tiene el id, se cambia a completado (se cambia su estado).
    // Si no, se deja igual.
    const marcarTarea = (id) => {
        setTareas((prev) => /* prev: tareas que hay en el listado (valor actual del estado en ese momento)*/
            prev.map((tarea) => // Recorrer todas las tareas.
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );
    };


    // Se devuelve un objeto con las funciones y datos necesarios para gestionar las tareas.
    return { 
        agregarTarea, eliminarTarea, marcarTarea, tareas
    };
} export default useTasks;