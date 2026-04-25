
import { useState } from "react";

function FilterButtons({estadoBoton, setEstadoBoton }) {

    const handleBotonChange = (e) => {
        setEstadoBoton(e.target.value);
    }
    return (
        <>
            <form>
                <p> Seleccionado: {estadoBoton}</p>

                <label>
                    <input 
                        type = "radio" 
                        name = "opciones"
                        value = "todas"
                        checked = {estadoBoton === "todas"}
                        onChange={handleBotonChange}
                    />
                    Todas
                </label>
                
                <label>
                    <input 
                        type = "radio" 
                        name = "opciones"
                        value = "completadas"
                        checked = {estadoBoton === "completadas"}
                        onChange={handleBotonChange}
                    />
                    Completadas
                </label>
                <label>
                    <input 
                        type = "radio" 
                        name = "opciones"
                        value = "pendientes"
                        checked = {estadoBoton === "pendientes"}
                        onChange={handleBotonChange}

                    />
                    Pendientes
                </label>
            </form>
        </>
    );
} export default FilterButtons;