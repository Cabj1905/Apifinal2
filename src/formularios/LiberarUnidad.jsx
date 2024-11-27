import React, { useState } from 'react'
import { liberarUnidad } from '../apis/liberarUnidad';
import "./styles/LiberarUnidad.css"

export const LiberarUnidad = () => {
  const [dni, setDni] = useState('');
  const [idunidad, setIdunidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evitar recarga de la página

    // Validar si el DNI es válido
    if (!dni || dni.trim().length === 0) {
      setMensaje('El DNI es obligatorio.');
      return;
    }

    setMensaje('');
    try {
      const resultado = await liberarUnidad(idunidad, dni);
      
      if (resultado) {
        setMensaje('Unidad liberada con éxito.');
      } else {
        setMensaje('No se pudo liberar la unidad.');
      }
    } catch (error) {
      // Manejar errores específicos según el código de estado
      if (error.message.includes('409')) {
        alert('El DNI ingresado no coincide con el dueño de la unidad.');
      } else if (error.message.includes('404')) {
        setMensaje('Unidad o persona no encontrada.');
      } else {
        setMensaje('Ocurrió un error inesperado.');
      }
    }
    
    setIdunidad('');
    setDni('');
  };
  
    return (
      <div className="form-container-liberar">
      <h1>Formulario para liberar unidad</h1>
      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="Ingresa el DNI del dueño"
          />
          <label htmlFor="idunidad">ID de la Unidad:</label>
          <input
            type="text"
            id="idunidad"
            value={idunidad}
            onChange={(e) => setIdunidad(e.target.value)}
            placeholder="Ingresa el id de la unidad"
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Liberar Unidad
          </button>
        </div>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    
    );
  };