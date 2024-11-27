
/*
// api.js
export const obtenerUsuario = async (dni, password) => {
  const response = await fetch('http://localhost:8080/api/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dni: dni,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos');
  }
  const data = await response.json();
  return data; // Devuelve los datos del usuario si el login es exitoso
};
*/

export const obtenerUsuario = async (dni, password) => {
  const response = await fetch('http://localhost:8080/api/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dni: dni,
      password: password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.mensaje || 'Error de inicio de sesión');
  }

  return data; // Devuelve los datos del usuario si el login es exitoso
};



