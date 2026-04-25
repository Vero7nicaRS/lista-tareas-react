import TaskForm from "./TaskForm";
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskProvider } from "../context/TaskContext";

/* ---------------------------------------------------------------------------------------- 
                                        TaskForm.test.js 
                                        ---------------
- Es el archivo de test para el componente "TaskForm". 
- Se utiliza "React Testing Library" para renderizar el componente y simular eventos.

### Página de utilidad: testing-library.com/docs/react-testing-library/example-intro
/* ----------------------------------------------------------------------------------------*/

describe("TaskForm", async() => {
    it("should add a new task correctly and clear the form after submission", async () => {
    // Datos de prueba para el formulario (Arrange)

    render(
        <TaskProvider>
        <TaskForm />
        </TaskProvider>
    );
    // Ejecuto (ACT)
    const inputTitulo = screen.getByLabelText(/Título/i);
    const inputDescripcion = screen.getByLabelText(/Descripción/i);
    const botonCrear = screen.getByRole("button", { name: /Agregar tarea/i });
    
    await userEvent.click(inputTitulo);
    await userEvent.type(inputTitulo, "Limpiar la casa");
    await userEvent.click(inputDescripcion);
    await userEvent.type(inputDescripcion, "Limpiar el salón y la cocina");
    await userEvent.click(botonCrear);

    // Compruebo los resultados (ASSERT)
    expect(inputTitulo).toHaveValue("");
    expect(inputDescripcion).toHaveValue("");

    });
});
