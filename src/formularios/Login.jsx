import React, { useState } from "react";
import { obtenerUsuario } from "../apis/ObtenerUsuario"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const Login = () => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await obtenerUsuario(dni);
      if (usuario.password === password) {
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
        <label>DNI:</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
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
