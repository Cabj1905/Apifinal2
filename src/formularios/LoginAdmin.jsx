import React, { useState } from "react";
import { obtenerUsuario } from "../apis/loginAdministrador"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const Login = () => {
  const [usuario, setDni] = useState("");
  const [contrasena, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
 
  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario1 = await obtenerUsuario(usuario);
      if (usuario1.contrasena === contrasena) {
        setMensaje("Inicio de sesión exitoso");
        alert("Inicio de sesión exitoso")
        // Aquí podrías redirigir al usuario o guardar el estado de sesión
      } else {
        setMensaje("Contraseña incorrecta");
        alert("Contraseña incorrecta")
      }
    } catch (error) {
      setMensaje("Usuario no encontrado");
      alert("Usuario no encontrado")
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>USUARIO:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setDni(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default Login;
