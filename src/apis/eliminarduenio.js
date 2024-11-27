export const eliminarDuenioDeUnidad = async (idunidad, documento) => {
    try {
      const response = await fetch(`http://localhost:8080/api/unidades/${idunidad}/elimininarduenio`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: documento,  // Enviar el documento del dueño a eliminar
      });
  
      if (response.ok) {
        return true;  // El dueño fue eliminado correctamente
      } else {
        return false;  // Hubo un error al intentar eliminar al dueño
      }
    } catch (error) {
      console.error('Error al eliminar el dueño de la unidad:', error);
      return false;  // Si hubo un error en la solicitud
    }
  };
  