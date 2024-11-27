// eliminarInquilino.js

export const eliminarInquilino = async (idunidad, documento) => {
    try {
      const respuesta = await fetch(
        `http://localhost:8080/api/unidades/${idunidad}/eliminarinquilino`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:documento // Enviar solo el documento como cuerpo
        }
      );
  
      if (respuesta.ok) {
        const mensaje = await respuesta.text(); // Respuesta del servidor como texto
        return mensaje; // "Inquilino eliminado"
      } else if (respuesta.status === 404) {
        throw new Error("Unidad o inquilino no encontrado.");
      } else {
        throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
      }
    } catch (error) {
      console.error("Error al eliminar el inquilino:", error.message);
      throw error;
    }
  };
  