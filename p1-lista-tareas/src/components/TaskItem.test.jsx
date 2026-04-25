import TaskItem from "./TaskItem";
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskProvider } from "../context/TaskContext";

/* ---------------------------------------------------------------------------------------- 
                                        TaskItem.test.js 
                                        ---------------
- Es el archivo de test para el componente "TaskItem". 
- Se utiliza "React Testing Library" para renderizar el componente y simular eventos.

### Página de utilidad: testing-library.com/docs/react-testing-library/example-intro
/* ----------------------------------------------------------------------------------------*/

describe("TaskItem", async() => {
    it("should display the correct task title and description", async () => {
    // Datos de prueba para el formulario (Arrange)
    const tarea = {
        id: 1,
        titulo: "Poner la lavadora",
        descripcion: "Ropa de color",
        completada: false
    }
    render(
        <TaskProvider>  
            <TaskItem tarea={tarea} />
        </TaskProvider>
    );
    // Ejecuto (ACT)
    const tituloElement = screen.getByText(/Poner la lavadora/i);
    const descripcionElement = screen.getByText(/Ropa de color/i);

    // Compruebo los resultados (ASSERT)
    expect(tituloElement).toBeInTheDocument();
    expect(descripcionElement).toBeInTheDocument();

    });
});
