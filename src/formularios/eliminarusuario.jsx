// DeleteUser.js
import React, { useState } from 'react';
import deleteUser from '../apis/deleteuser';

const DeleteUser = () => {
  const [dni, setDni] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const result = await deleteUser(dni);
    if (result.success) {
      setMessage('Usuario eliminado exitosamente.');
      alert('Usuario eliminado exitosamente.')
    } else {
      setMessage(result.message);
      alert("Error al eliminar")
    }
  };

  return (
    <div>
      <h2>Eliminar Usuario</h2>
      <input
        type="text"
        placeholder="Ingrese DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <button onClick={handleDelete}>Eliminar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUser;
