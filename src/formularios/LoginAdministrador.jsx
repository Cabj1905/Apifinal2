import React, { useState } from "react";
import { loginAdministrador } from "../apis/loginAdministrador"; // Importa la función de la API que hará la llamada al backend

const LoginAdministrador = () => {
  const [usuario, setUsuario] = useState("");  // Usuario del administrador
  const [contrasena, setContrasena] = useState(""); // Contraseña del administrador
  const [mensaje, setMensaje] = useState(""); // Mensaje de estado

  const manejarSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página

    try {
      const resultado = await loginAdministrador({ usuario, contrasena }); // Llama a la función de la API con los datos del administrador

      if (resultado.loginExitoso) {
        setMensaje("Inicio de sesión exitoso");
        alert(`Bienvenido, ${resultado.usuario}`); // Mensaje de bienvenida
        // Aquí puedes redirigir al administrador o almacenar el token/sesión
      } else {
        setMensaje(resultado.mensaje || "Error desconocido");
        alert(resultado.mensaje); // Mensaje de error del backend
      }
    } catch (error) {
      setMensaje("Error al iniciar sesión");
      alert("Error de red o servidor");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default LoginAdministrador;
