// Función para obtener los reclamos de un edificio utilizando fetch
export const obtenerReclamosPorEdificio = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/reclamos/reclamosedificio/${id}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener los reclamos');
      }
      const data = await response.json(); // Convierte la respuesta en formato JSON
      return data; // Retorna la lista de reclamos
    } catch (error) {
      console.error("Error al obtener los reclamos:", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  };


  
  
  