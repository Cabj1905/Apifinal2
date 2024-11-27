import React, { useState } from "react";
import { crearUsuario } from "../apis/crearUsuario"; // Asegúrate de que la ruta sea correcta

const CrearUsuario = () => {
  const [dni, setDni] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();

    const usuarioData = {
      dni,
      username,
      password,
    };

    try {
      const nuevoUsuario = await crearUsuario(usuarioData);
      setMensaje(`Usuario creado exitosamente: ${nuevoUsuario.username}`);
      alert(`Usuario creado exitosamente: ${nuevoUsuario.username}`)
    } catch (error) {
      setMensaje(`Error al crear usuario: ${error.message}`);
      alert(`Error al crear usuario: ${error.message}`);
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
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="APELIIDO, NOMBRE EN MAYUS"
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
      <button type="submit">Crear Usuario</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default CrearUsuario;
