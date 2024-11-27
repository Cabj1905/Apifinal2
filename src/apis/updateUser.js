// updateUser.js

const updateUser = async (dni, newPassword) => {
  try {
    // Realizamos la solicitud PUT al backend
    const response = await fetch(`http://localhost:8080/api/usuarios/update/${dni}?contrasena=${newPassword}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verificamos la respuesta del servidor
    if (!response.ok) {
      if (response.status === 404) {
        return { success: false, message: "Usuario no encontrado" };
      } else if (response.status === 426) {
        return { success: true, message: "Contraseña actualizada correctamente" };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message || "Error al actualizar la contraseña" };
      }
    }

    // Si todo salió bien
    return { success: true, message: "Contraseña actualizada correctamente" };

  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error de red al actualizar la contraseña' };
  }
};

export default updateUser
  