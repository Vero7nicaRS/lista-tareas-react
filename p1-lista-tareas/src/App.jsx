import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
// import TaskForm from './components/TaskForm'
import useTasks from './hooks/useTasks'
import TaskList from './components/TaskList'
// import FilterButtons from './components/FilterButtons'
import { useTasksContext } from './context/TaskContext'
import { Suspense, lazy } from 'react'
function App() {
  const {tareas} = useTasksContext();
  const [estadoBoton, setEstadoBoton] = useState("todas");

  const tareasFiltradas = 
    tareas.filter((itemTarea) => {
      if(estadoBoton === "completadas") return itemTarea.completada; 
      if(estadoBoton === "pendientes") return !itemTarea.completada;
      else return true; /* Si el estado del botón es "todas", se muestran todas las tareas sin filtrar. */
    });

    // Se utiliza "React.lazy" y "Suspense" para cargar los componentes de forma diferida (lazy loading)
    const TaskForm = lazy(() => import("./components/TaskForm"));
    const FilterButtons = lazy(() => import("./components/FilterButtons"));

    /* 
     El componente TaskForm y FilterButtons se cargan de forma diferida (lazy loading) usando "React.lazy" y "Suspense".
     Con esto se consigue que se carguen los componentes que son necesarios en ese momento 
     y no se cargue todo el código desde el principip
     También, mientras se va cargando el componente, se muestra un mensaje de 
     "Cargando el formulario..." y "Cargando el listado de tareas..." , 
     esto es gracias al uso de "fallback" de "Suspense". */
  return (
    <>
    <Header></Header>
    <Suspense fallback={<div>Cargando el formulario 🔁...</div>}>
      <TaskForm></TaskForm>
    </Suspense>
    {/* <TaskForm></TaskForm> --> Antes de poner React.lazy y Suspense */}

    <Suspense fallback={<div>Cargando el listado de tareas 🔁...</div>}>
      <FilterButtons estadoBoton = {estadoBoton} setEstadoBoton = {setEstadoBoton}></FilterButtons>
    </Suspense>
    {/* 
     <FilterButtons estadoBoton = {estadoBoton} setEstadoBoton = {setEstadoBoton}></FilterButtons>
     --> Antes de poner React.lazy y Suspense 
    */}
    <TaskList lista={tareasFiltradas}></TaskList>


    </>
  )
}

export default App;
