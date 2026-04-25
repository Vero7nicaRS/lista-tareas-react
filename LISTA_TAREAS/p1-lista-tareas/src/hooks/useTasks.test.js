import useTasks from "./useTasks";
import { render, screen, renderHook, act} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskProvider } from "../context/TaskContext";

/* ---------------------------------------------------------------------------------------- 
                                        useTasks.test.js 
                                        ---------------
- Es el archivo de test para el componente "useTasks". 
- Se utiliza "React Testing Library" para renderizar el componente y simular eventos.

### Página de utilidad: testing-library.com/docs/react-testing-library/example-intro

### - renderHook sirve para probar un HOOK sin necesidad de renderizar un componente.
### - result.current es lo que devuelve el hook.
### - act sirve para realizar las funciones que modifican el estado de las tareas,
      como agregar, eliminar, cambiar o marcar una tarea.

### render --> componentes  / renderHook, act y result.current --> hooks
/* ----------------------------------------------------------------------------------------*/

describe("useTasks", async() => {
    // Antes de cada test, se vacía el localStorage. De este modo, se evita que haya datos antiguos de otros tests.
    beforeEach(() => {
        localStorage.clear();
    });

    it("should initialize with tasks from localStorage", async () => {
        // 1. Ejecutar el hook para obtener las funciones y el estado de las tareas.
        const { result } = renderHook(() => useTasks());
        // result tendrá "agregarTarea", "eliminarTarea", "cambiarTarea", "marcarTarea" y "tareas" (que es un array de tareas).

        // 2. Comprobar que el estado de las tareas es un array vacío (porque se ha vaciado el localStorage antes de cada test).
        expect(result.current.tareas).toEqual([]);
    });

    it("should add a new task", async () => {
        // 1. Ejecutar el hook para obtener las funciones y el estado de las tareas.
        const { result } = renderHook(() => useTasks());    
        // result tendrá "agregarTarea", "eliminarTarea", "cambiarTarea", "marcarTarea" y "tareas" (que es un array de tareas).

        // 2. Agregar una nueva tarea utilizando la función "agregarTarea".
        act(() => {
            result.current.agregarTarea("Comprar", "Pan y verduras");
        });
        // 3. Comprobar que la tarea se ha agregado correctamente al estado de las tareas.
        expect(result.current.tareas).toHaveLength(1);
        expect(result.current.tareas[0]).toMatchObject({    
            titulo: "Comprar",
            descripcion: "Pan y verduras",
            completada: false,
        });
    });

    it("should delete a task", async () => {
        // 1. Ejecutar el hook para obtener las funciones y el estado de las tareas.
        const { result } = renderHook(() => useTasks());    
        // result tendrá "agregarTarea", "eliminarTarea", "cambiarTarea", "marcarTarea" y "tareas" (que es un array de tareas).

        // 2. Eliminar una nueva tarea utilizando la función "eliminarTarea".
        act(() => {
            result.current.eliminarTarea("Comprar", "Pan y verduras");
        });
        // 3. Comprobar que la tarea se ha eliminado correctamente del estado de las tareas.
        expect(result.current.tareas).toHaveLength(0);
    });

    
    it("should change a completed task ", async () => {
        // 1. Ejecutar el hook para obtener las funciones y el estado de las tareas.
        const { result } = renderHook(() => useTasks());    
        // result tendrá "agregarTarea", "eliminarTarea", "cambiarTarea", "marcarTarea" y "tareas" (que es un array de tareas).

        // 2. Agregar una nueva tarea utilizando la función "agregarTarea".
        act(() => {
            result.current.agregarTarea("Barrer", "Salón y cocina");
        });
        // 3. Comprobar que la tarea se ha agregado correctamente al estado de las tareas.
        expect(result.current.tareas).toHaveLength(1);
        expect(result.current.tareas[0]).toMatchObject({    
            titulo: "Barrer",
            descripcion: "Salón y cocina",
            completada: false,
        });

        // 4. Marcar la tarea como completada utilizando la función "marcarTarea".
        act(() => {
            result.current.marcarTarea(result.current.tareas[0].id);
        });
        // 5. Comprobar que la tarea se ha marcado correctamente como completada.
        expect(result.current.tareas[0].completada).toBe(true); 
    });
});
