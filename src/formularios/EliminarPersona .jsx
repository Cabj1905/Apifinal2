import React, { useState } from 'react';
import { deletePersonaByDni } from '../apis/deletepersonaid'  // Importa la función para eliminar la persona

const EliminarPersona = () => {
  const [dni, setDni] = useState(''); // Estado para almacenar el DNI de la persona a eliminar

  const handleEliminar = async (e) => {
    e.preventDefault();  // Evita la recarga de la página

    if (!dni) {
      alert("Por favor, ingrese un DNI.");
      return;
    }

    const success = await deletePersonaByDni(dni);

    if (success) {
      alert('Persona eliminada con éxito.');
      setDni('');  // Limpiar el campo de DNI después de la eliminación exitosa
    } else {
      alert('Hubo un error al eliminar la persona.');
    }
  };

  return (
    <div>
      <h2>Eliminar Persona</h2>
      <form onSubmit={handleEliminar}>
        <label>Ingrese el DNI de la persona:</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default EliminarPersona;
