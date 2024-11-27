import React, { useState } from 'react';
import { deleteUnidadById } from '../apis/deleteUnidadById'  // Asegúrate de que la función esté en el archivo adecuado

const EliminarUnidad = () => {
  const [idUnidad, setIdUnidad] = useState(''); // Estado para almacenar el ID de la unidad a eliminar

  const handleEliminar = async (e) => {
    e.preventDefault();  // Evita la recarga de la página

    if (!idUnidad) {
      alert("Por favor, ingrese un ID de unidad.");
      return;
    }

    const success = await deleteUnidadById(idUnidad);

    if (success) {
      alert('Unidad eliminada con éxito.');
      setIdUnidad('');  // Limpiar el campo de ID después de la eliminación exitosa
    } else {
      alert('Hubo un error al eliminar la unidad.');
    }
  };

  return (
    <div>
      <h2>Eliminar Unidad</h2>
      <form onSubmit={handleEliminar}>
        <label>Ingrese ID de la unidad:</label>
        <input
          type="number"
          value={idUnidad}
          onChange={(e) => setIdUnidad(e.target.value)}
          required
        />
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default EliminarUnidad;
