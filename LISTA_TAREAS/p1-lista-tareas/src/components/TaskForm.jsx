import { useState } from "react";
import { useTasksContext } from "../context/TaskContext";
/* ----------------------------------------------------------------------------------------
                                        TaskForm 
                                        --------
- Es un formulario para añadir nuevas tareas a la "TO-DO-LIST". 
- Este formulario tiene dos campos: título (input), descripción (textarea)
-------------------------------------------------------------------------------------------
*/

function TaskForm() {
    
  // 1. Un estado por cada campo del formulario
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // 3. Se obtiene el contexto de las tareas para añadir una nueva tarea al formulario.
  const { agregarTarea } = useTasksContext();

  console.log("🎨 Render del form — titulo:", titulo, "| descripcion:", descripcion);

  // 2. Handler del submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // ¡"preventDefault" es IMPORTANTE porque evita recargar la página!
    console.log("📤 Enviando formulario:", { titulo, descripcion });

    // Validación básica
    if (!titulo.trim() || !descripcion.trim()) {
      alert("⚠️ Título y descripción son obligatorios");
      return;
    }

    setSubmitting(true);
    try {
      agregarTarea(titulo, descripcion);
      console.log("Se ha añadido tarea...", titulo, descripcion);
      setTitulo("");
      setDescripcion("");
    }
    catch (err) {
      console.error("❌ Error al crear el post:", err);
      alert("Error al crear el post: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

    return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1> Crear nueva tarea</h1>

      <form onSubmit={handleSubmit}>
        {/* Input de texto — controlado */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="titulo" style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe el título..."
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 6,
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Textarea — mismo patrón */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="descripcion" style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
            Descripción
          </label>
          <textarea // Campo para escribir la descripción de la tarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Escribe la descripción..."
            rows={4}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 6,
              border: "1px solid #ccc",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
        </div>

        {/* Select — también controlado */}
        
        <button
          type="submit"
          disabled={submitting}
          style={{
            backgroundColor: "#0066ff",
            color: "white",
            border: "none",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            borderRadius: 6,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "⏳ Enviando..." : "📤 Agregar tarea"}
        </button>
      </form>

      {/* 4. Preview en tiempo real */}
      {titulo && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
          }}
        >
          <h3>👁️ Preview</h3>
          <h4>{titulo}</h4>
          <p>{descripcion || "(sin descripcion)"}</p>
          <span
            style={{
              backgroundColor: "#e0e0e0",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: "0.85rem",
            }}
          >

          </span>
        </div>
      )}

      {/* Resultado del POST */}
      {result && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#d4edda",
            borderRadius: 8,
            border: "1px solid #c3e6cb",
          }}
        >
          <h3>✅ Tarea agregada con éxito</h3>
          <p><strong>ID:</strong> {result.id}</p>
          <p><strong>Título:</strong> {result.titulo}</p>
          <p><strong>Descripción:</strong> {result.descripcion}</p>
        </div>
      )}
    </div>
  );
} export default TaskForm;