import React, { useState } from 'react'
import { agregarDuenio } from '../apis/agregarDuenio';

export const AgregarDuenio = () => {
    const [documento, setDocumento] = useState(''); // Estado para almacenar el documento ingresado
    const [mensaje, setMensaje] = useState(null);   // Estado para mostrar mensajes al usuario
    const [idunidad, setIdunidad] = useState(""); 
    // Función para manejar la solicitud PUT
    const manejarPutRequest = async (event) => {
      event.preventDefault(); // Evitar la recarga de la página
        //llamar funcion
        const respuesta=await agregarDuenio(idunidad,documento);
        if(respuesta!=null){
        }
        setDocumento("")
        setIdunidad("")
    }
    return (
      <div className="container mt-5 border border-info p-2">
        <h2 className="mb-4">Agregar Dueño a la Unidad</h2>
        
        {/* Formulario para ingresar el documento */}
        <form onSubmit={manejarPutRequest}>
          <div className="mb-3">
            <label htmlFor="documento" className="form-label">Documento del Dueño:</label>
            <input
              type="text"
              id="documento"
              className="form-control"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Ingrese el documento del dueño (e.g., DNI 89231201)"
              required
            />
            <input
              type="text"
              id="idunidad"
              className="form-control"
              value={idunidad}
              onChange={(e) => setIdunidad(e.target.value)}
              placeholder="Ingrese el id de la unidad"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar Dueño
          </button>
        </form>
  
        {/* Mostrar mensaje de feedback al usuario */}
        {mensaje && (
          <div className="mt-3 alert alert-info">
            {mensaje}
          </div>
        )}
      </div>
    );
  }
  