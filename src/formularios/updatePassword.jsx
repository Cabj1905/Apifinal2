// UpdatePassword.js
import React, { useState } from 'react';
import updateUser from '../apis/updateUser';

const UpdatePassword = ({dniUsuario}) => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleUpdate = async (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
      
      // Usar dniUsuario directamente en lugar de dni del estado
      const result = await updateUser(dniUsuario, password);
      
      if (result.success) {
        setMessage('Contraseña actualizada exitosamente.');
        alert('Contraseña actualizada exitosamente.')
        // Limpiar el campo de contraseña después de una actualización exitosa
        setPassword('');
      } else {
        setMessage(result.message);
      }
    };
  
    return (
      <div>
        <h2>Actualizar Contraseña</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="DNI"
            value={dniUsuario}
            readOnly // Hace que el input sea de solo lectura
            disabled // Opcional: para mostrar visualmente que no se puede editar
          />
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Actualizar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };

export default UpdatePassword;
