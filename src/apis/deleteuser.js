// deleteUser.js

const deleteUser = async (dni) => {
    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/borrarusuario/${dni}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        return { success: true };
      } else if (response.status === 404) {
        return { success: false, message: 'Usuario no encontrado' };
      } else {
        return { success: false, message: 'Error inesperado' };
      }
    } catch (error) {
      return { success: false, message: 'Error en la conexión con el servidor' };
    }
  };
  
  export default deleteUser;
  