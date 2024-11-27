import React from "react";

//http://localhost:8080/api/unidades/1615/liberarUnidad?dni=DNI 30825333
// liberarUnidad.js

export const liberarUnidad = async (idunidad, dni) => {
  try {
    const respuesta = await fetch(
      `http://localhost:8080/api/unidades/${idunidad}/liberarUnidad?dni=${dni}`,
      {
        method: "PUT",
      }
    );

    if (respuesta.ok) {
      const data = await respuesta.text(); // Convertir la respuesta a texto
      console.log("Unidad liberada:", data);
      return data; // Retorna el mensaje del backend
    } else if (respuesta.status === 404) {
      throw new Error("Unidad o persona no encontrada.");
    } else {
      throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
    }
  } catch (error) {
    console.error("Error al liberar la unidad:", error.message);
    return null; // Retorna null si hubo un error
  }
};

