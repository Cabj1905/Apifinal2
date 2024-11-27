

import React, { useState } from 'react';



const ReclamosEdificioComponent = () => {
  const [idEdificio, setIdEdificio] = useState(''); // ID del edificio
  const [reclamos, setReclamos] = useState([]);     // Lista de reclamos
  const [mensaje, setMensaje] = useState('');       // Mensaje de error o éxito
  const [filtro, setFiltro] = useState('');         // Filtro seleccionado

  // Función para obtener los reclamos por edificio
  const obtenerReclamos = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/reclamos/reclamosedificio/${idEdificio}`);
      if (!response.ok) {
        throw new Error('No se encontraron reclamos');
      }
      const data = await response.json();
      setReclamos(data);
      setMensaje('');
    } catch (error) {
      console.error('Error al obtener reclamos:', error);
      setReclamos([]);
      setMensaje('No se encontraron reclamos para este edificio.');
    }
  };

  // Función para aplicar el filtro
  const aplicarFiltro = () => {
    let reclamosOrdenados = [...reclamos];

    if (filtro) {
      reclamosOrdenados.sort((a, b) => {
        if (filtro === "numero") {
          return a[filtro] - b[filtro]; // Orden numérico por ID de reclamo
        } else if (filtro === "estado") {
          return a.estado.localeCompare(b.estado); // Orden alfabético por estado
        } else if (filtro === "usuario") {
          return a.usuario.nombre.localeCompare(b.usuario.nombre); // Orden alfabético por nombre del usuario
        } else if (filtro === "edificio") {
          return a.edificio.codigo - b.edificio.codigo; // Orden numérico por código de edificio
        } else if (filtro === "unidad") {
          return a.unidad.id - b.unidad.id; // Orden numérico por unidad
        } else if (filtro === "fecha") {
          return new Date(a.fecha) - new Date(b.fecha); // Orden por fecha
        }
        return 0;
      });
    }

    setReclamos(reclamosOrdenados);
  };

  return (
    <div>
      <h2>Buscar Reclamos por Edificio</h2>
      <form onSubmit={obtenerReclamos}>
        <label>ID del Edificio:</label>
        <input
          type="number"
          value={idEdificio}
          onChange={(e) => setIdEdificio(e.target.value)}
          required
        />
        <button type="submit">Buscar Reclamos</button>
      </form>

      {/* Filtrado */}
      {reclamos.length > 0 && (
        <div>
          <label>Filtrar por: </label>
          <select onChange={(e) => setFiltro(e.target.value)}>
            <option value="">Selecciona un filtro</option>
            <option value="numero">Número</option>
            <option value="edificio">Edificio</option>
            <option value="estado">Estado</option>
            <option value="unidad">Unidad</option>
            <option value="usuario">Usuario</option>
            <option value="fecha">Fecha</option>
          </select>
          <button onClick={aplicarFiltro}>Aplicar Filtro</button>
        </div>
      )}

      {/* Mensajes */}
      {mensaje && <p>{mensaje}</p>}

      {/* Lista de reclamos */}
      {reclamos.length > 0 && (
        <ul>
          {reclamos.map((reclamo) => (
            <li key={reclamo.id}>
              <strong>ID Reclamo:</strong> {reclamo.numero} <br />
              <strong>Descripción:</strong> {reclamo.descripcion} <br />
              <strong>Estado:</strong> {reclamo.estado} <br />
              <strong>Usuario:</strong> {reclamo.usuario?.nombre} <br />
              <strong>Edificio:</strong> {reclamo.edificio?.nombre} <br />
              <strong>Unidad:</strong> {reclamo.unidad?.id} <br />
              <strong>Fecha:</strong> {reclamo.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReclamosEdificioComponent;



