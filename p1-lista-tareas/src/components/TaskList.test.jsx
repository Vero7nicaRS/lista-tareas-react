import TaskList from "./TaskList";
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskProvider } from "../context/TaskContext";

/* ---------------------------------------------------------------------------------------- 
                                        TaskList.test.js 
                                        ---------------
- Es el archivo de test para el componente "TaskList". 
- Se utiliza "React Testing Library" para renderizar el componente y simular eventos.

### Página de utilidad: testing-library.com/docs/react-testing-library/example-intro
/* ----------------------------------------------------------------------------------------*/

describe("TaskList", async() => {
    it("should display task list correctly", async () => {
    // Datos de prueba para el formulario (Arrange)
    const lista = [
        {
            id: 1,
            titulo: "Poner la lavadora",
            descripcion: "Ropa de color",
            completada: false
        },
       {
            id: 2,
            titulo: "Comprar comida",
            descripcion: "Pan y verduras",
            completada: true
        },

    ]
    render(
        <TaskProvider>  
            <TaskList  lista = {lista} />
        </TaskProvider>
    );
    // Ejecuto (ACT)
    const tituloElement = screen.getByText(/Poner la lavadora/i);
    const descripcionElement = screen.getByText(/Ropa de color/i);

    // Compruebo los resultados (ASSERT)
    expect(tituloElement).toBeInTheDocument();
    expect(descripcionElement).toBeInTheDocument();

    });

    it("should display 'No hay tareas.' when the task list is empty", async () => {
        // Renderizo el componente con una lista vacía (Arrange)
        render(
            <TaskProvider>  
                <TaskList  lista = {[]} />
            </TaskProvider>
        );
        // Ejecuto (ACT)
        const noTasksElement = screen.getByText(/No hay tareas./i);
        // Compruebo los resultados (ASSERT)
        expect(noTasksElement).toBeInTheDocument();
    });
});
