import React, { useState } from 'react';
import { eliminarDuenioDeUnidad } from '../apis/eliminarduenio';  // Importa la función para eliminar al dueño de la unidad

const EliminarDuenioUnidad = () => {
  const [idUnidad, setIdUnidad] = useState('');   // Estado para almacenar el id de la unidad
  const [documento, setDocumento] = useState(''); // Estado para almacenar el documento del dueño a eliminar

  const handleEliminarDuenio = async (e) => {
    e.preventDefault();  // Evita la recarga de la página

    if (!idUnidad || !documento) {
      alert("Por favor, ingrese el ID de la unidad y el documento del dueño.");
      return;
    }

    const success = await eliminarDuenioDeUnidad(idUnidad, documento);

    if (success) {
      alert('Dueño eliminado de la unidad con éxito.');
      setIdUnidad('');  // Limpiar el campo de ID de unidad
      setDocumento('');  // Limpiar el campo de documento
    } else {
      alert('Hubo un error al eliminar al dueño de la unidad.');
    }
  };

  return (
    <div>
      <h2>Eliminar Dueño de la Unidad</h2>
      <form onSubmit={handleEliminarDuenio}>
        <label>ID de la Unidad:</label>
        <input
          type="number"
          value={idUnidad}
          onChange={(e) => setIdUnidad(e.target.value)}
          required
        />
        <br />
        <label>Documento del Dueño:</label>
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />
        <br />
        <button type="submit">Eliminar Dueño</button>
      </form>
    </div>
  );
};

export default EliminarDuenioUnidad;
