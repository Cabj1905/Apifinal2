// src/components/ReclamosUsuario.jsx

// src/components/ReclamosUsuario.jsx

import React, { useState,useEffect } from 'react';
import { obtenerReclamosPorUsuario } from '../apis/obtenerReclamosUsuario'; // Asegúrate de que la ruta sea correcta
import "./styles/MostrarReclamo.css"

const ReclamosUsuario = ({dniUsuario}) => {
  const [reclamos, setReclamos] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const cargarReclamos = async () => {
      // Reinicia el estado antes de cargar
      setReclamos([]);
      setMensaje('');
    
      try {
        // Usa directamente el dniUsuario pasado como prop
        const reclamosUsuario = await obtenerReclamosPorUsuario(dniUsuario);
        
        if (reclamosUsuario.length === 0) {
          setMensaje('No tienes reclamos registrados.');
        } else {
          setReclamos(reclamosUsuario);
        }
      } catch (error) {
        alert('Error al obtener los reclamos. Intente de nuevo.')
        setMensaje('Error al obtener los reclamos. Intente de nuevo.');
        console.error(error);
      }
    };

    // Solo carga reclamos si hay un DNI
    if (dniUsuario) {
      cargarReclamos();
    }
  }, [dniUsuario]); 

  return (
    <div>
      <h3>Mis Reclamos</h3>
      
      {mensaje && <p style={{color: 'red'}}>{mensaje}</p>}
  
      {reclamos.length > 0 && (
        <div>
          <ul>
            {reclamos.map((reclamo) => (
              <li key={reclamo.idreclamo}>
                <p><strong>Número:</strong> {reclamo.numero}</p>
                <p><strong>Descripción:</strong> {reclamo.descripcion}</p>
                <p><strong>Estado:</strong> {reclamo.estado}</p>
                <p><strong>Ubicación:</strong> {reclamo.ubicacion}</p>
                <img src={reclamo.imganes} alt='ada'></img>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

  /*
  return (
    <div>
      <form onSubmit={reclamosUsuario}>
        <div>
          <label>DNI del Usuario:</label>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar Reclamos</button>
      </form>
      
      {mensaje && <p>{mensaje}</p>}

      {reclamos.length > 0 && (
        <div>
          <h3>Reclamos del Usuario:</h3>
          <ul>
            {reclamos.map((reclamo) => (
              <li key={reclamo.idreclamo}>
                <p><strong>Número:</strong> {reclamo.numero}</p>
                <p><strong>Descripción:</strong> {reclamo.descripcion}</p>
                <p><strong>Estado:</strong> {reclamo.estado}</p>
                <p><strong>Ubicación:</strong> {reclamo.ubicacion}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
*/


export default ReclamosUsuario;

  