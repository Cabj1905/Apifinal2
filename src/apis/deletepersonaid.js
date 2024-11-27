export const deletePersonaByDni = async (dni) => {
    try {
      const response = await fetch(`http://localhost:8080/api/personas/${dni}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        return true;  // La eliminación fue exitosa
      } else {
        return false;  // Hubo un error
      }
    } catch (error) {
      console.error('Error al eliminar la persona:', error);
      return false;  // Si hubo un error con la solicitud
    }
  };
  