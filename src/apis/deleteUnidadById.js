// Función para eliminar la unidad por su ID
export const deleteUnidadById = async (id) => {
    try {
      const url = `http://localhost:8080/api/unidades/delete/${id}`;
  
      // Enviar solicitud DELETE al backend
      const respuesta = await fetch(url, {
        method: 'DELETE', // El método es DELETE
        headers: {
          'Content-Type': 'application/json', // Indicamos que el cuerpo de la solicitud es JSON
        },
      });
  
      // Manejar la respuesta
      if (respuesta.ok) {
        const mensaje = await respuesta.text();  // Obtener el mensaje de éxito
        alert(mensaje);  // Mostrar mensaje de éxito
        return true; // Retornar true si la unidad fue eliminada
      } else {
        alert("Error al eliminar la unidad.");
        return false; // Retornar false si hubo un error
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la conexión con el servidor.');
      return false;
    }
  };
  