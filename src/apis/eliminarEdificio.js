export const deleteEdificioById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/edificios/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        return true;  // El edificio fue eliminado correctamente
      } else {
        return false;  // Hubo un error al intentar eliminar el edificio
      }
    } catch (error) {
      console.error('Error al eliminar el edificio:', error);
      return false;  // Si hubo un error en la solicitud
    }
  };
  