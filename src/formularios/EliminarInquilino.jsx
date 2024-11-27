import React, { useState } from "react";
import { eliminarInquilino } from "../apis/eliminarInquilino"; // Importa la función de utilidad
import "./styles/EliminarInqulino.css";

export const EliminarInquilino = () => {
  const [idunidad, setIdunidad] = useState("");
  const [documento, setDocumento] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evitar recarga de la página

    // Validar si los campos son válidos
    if (!idunidad || !documento) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    try {
      const resultado = await eliminarInquilino(idunidad, documento);
      setMensaje(resultado); // Mostrar mensaje de éxito
    } catch (error) {
      setMensaje(error.message); // Mostrar mensaje de error
    }

    // Limpiar campos del formulario
    setIdunidad("");
    setDocumento("");
  };

  return (
    <div className="form-container-eliminar">
      <h2>Eliminar Inquilino</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="ID de la Unidad"
          value={idunidad}
          onChange={(e) => setIdunidad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Documento del Inquilino"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />
        <button type="submit">Eliminar Inquilino</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};
