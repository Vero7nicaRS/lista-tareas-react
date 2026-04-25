import { useState } from "react";

/* ----------------------------------------------------------------------------------------
                                        TaskList 
                                        --------
- Muestra las tareas de la "TO-DO-LIST". 
-------------------------------------------------------------------------------------------
*/
import TaskItem from "./TaskItem";
function TaskList( {lista = [], eliminarTarea, marcarTarea} ) {
    return(
        <>
            <ul>
                { 
                    lista.length  === 0 ? 
                        <p>No hay tareas.</p>
                    :
                        lista.map((itemTarea) => (
                            <TaskItem
                                key = {itemTarea.id}
                                tarea = {itemTarea}
                                eliminarTarea = {eliminarTarea}
                                marcarTarea = {marcarTarea}
                            ></TaskItem>
                        ))
                }
            </ul>
       
        </>
    );
} export default TaskList;