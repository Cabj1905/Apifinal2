// src/components/AgregarUnidad.jsx

import React, { useState } from 'react';
import { agregarUnidadAEdificio } from '../apis/ponerunidadenedificio'; // Asegúrate de tener la ruta correcta

const AgregarUnidad = () => {
  const [idEdificio, setIdEdificio] = useState('');
  const [numeroUnidad, setNumeroUnidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();

    try {
      const edificioActualizado = await agregarUnidadAEdificio(idEdificio, numeroUnidad);
      alert(`Unidad asignada con éxito al edificio ${edificioActualizado.nombre}`)
      setMensaje(`Unidad asignada con éxito al edificio ${edificioActualizado.nombre}`);
    } catch (error) {
      setMensaje('Error al asignar la unidad. Verifica los datos.');
      alert('Error al asignar la unidad. Verifica los datos.')
    }
  };

  return (
   
    <form onSubmit={manejarSubmit}>
      <div>
        <h1>CAMBIAR UNIDAD DE EDIFICIO</h1>
        <label>ID Edificio:</label>
        <input
          type="number"
          value={idEdificio}
          onChange={(e) => setIdEdificio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Número de Unidad:</label>
        <input
          type="number"
          value={numeroUnidad}
          onChange={(e) => setNumeroUnidad(e.target.value)}
          required
        />
      </div>
      <button type="submit">Asignar Unidad</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default AgregarUnidad;
