import React, { useState } from 'react';
import { deleteEdificioById } from '../apis/eliminarEdificio';  // Importa la función para eliminar el edificio

const EliminarEdificio = () => {
  const [id, setId] = useState('');  // Estado para almacenar el id del edificio a eliminar

  const handleEliminar = async (e) => {
    e.preventDefault();  // Evita la recarga de la página

    if (!id) {
      alert("Por favor, ingrese un ID de edificio.");
      return;
    }

    const success = await deleteEdificioById(id);

    if (success) {
      alert('Edificio eliminado con éxito.');
      setId('');  // Limpiar el campo de ID después de la eliminación exitosa
    } else {
      alert('Hubo un error al eliminar el edificio.');
    }
  };

  return (
    <div>
      <h2>Eliminar Edificio</h2>
      <form onSubmit={handleEliminar}>
        <label>Ingrese el ID del edificio:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default EliminarEdificio;
