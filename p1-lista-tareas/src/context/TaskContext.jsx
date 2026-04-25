import { createContext, useContext, useState } from 'react'
import useTasks from '../hooks/useTasks';
// 1. Crear el contexto
const TaskContext = createContext();

// 2. Crear el Provider (componente que envuelve y provee el valor)
export function TaskProvider({ children }) {
  // const [ theme, setTheme ] = useState('light');
  const {tareas, agregarTarea, eliminarTarea, marcarTarea} = useTasks();

 /* const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      console.log("Cambiando tema a: ", next);
      return next;
    })
  } */

  return (
 //   <TaskContext.Provider value={{ theme, toggleTheme }}>
    <TaskContext.Provider value={{ tareas, agregarTarea, eliminarTarea, marcarTarea }}>
      { children }
    </TaskContext.Provider>
  )
}

// 3. Custom Hook para consumir el contexto. (Patrón recomendado)
export function useTasksContext() {
  const context = useContext(TaskContext);
  if(!context) {
    throw new Error("useTasksContext debe usarse dentro de un TaskContextProvider")
  }
  return context;
}

// const {theme} = useTheme();