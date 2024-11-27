// src/apis/api.js

export const agregarUnidadAEdificio = async (idEdificio, numeroUnidad) => {
    try {
      const response = await fetch(`http://localhost:8080/api/edificios/agregarunidad/${idEdificio}/${numeroUnidad}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error al asignar la unidad: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data; // Devuelve el edificio actualizado
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  };
  