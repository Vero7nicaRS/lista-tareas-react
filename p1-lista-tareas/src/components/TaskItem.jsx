import { useState } from "react";
import { useTasksContext } from "../context/TaskContext";

// Antes se pasaba "eliminarTarea" y "marcarTarea" como props desde el componente padre,
// pero ahora se obtienen directamente del contexto de tareas usando el hook "useTasksContext".
// Esto hace que el componente sea más independiente y reutilizable, ya que no depende de props externas para funcionar.
function TaskItem({ tarea}) {
  // 1. Se obtiene el contexto de las tareas para añadir una nueva tarea al formulario.
    const { eliminarTarea, marcarTarea } = useTasksContext();
    return (
            <>
                <li>
                    <p>
                       ✏ {tarea.titulo} ({tarea.id}) se encuentra: {tarea.completada ? "completada" : "pendiente"}.
                    </p>

                    <p>
                        Descripción de la tarea: {tarea.descripcion}
                    </p>
                    <button onClick={() => marcarTarea(tarea.id)}>
                        {tarea.completada ? "Marcar pendiente" : "Marcar completada"}
                    </button>

                    <button onClick={() => eliminarTarea(tarea.id)}>
                        Eliminar
                    </button>
                </li>
            </>
    );
} export default TaskItem;