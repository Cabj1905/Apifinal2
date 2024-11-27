// src/apis/api.js

export const obtenerReclamosPorUsuario = async (dni) => {
    try {
      const response = await fetch(`http://localhost:8080/api/reclamos/reclamosMios/${dni}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error al obtener reclamos: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data; // Devuelve la lista de reclamos del usuario
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  };
  