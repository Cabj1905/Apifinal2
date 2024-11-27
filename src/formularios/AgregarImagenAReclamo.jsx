

/*
export const AgregarImagenAReclamo = () => {
    const [direccion, setDireccion] = useState('');
    const [tipo, setTipo] = useState('png');
    const [idreclamo, setIdreclamo] = useState(null);
    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Cuerpo de la petición
      const body = {
        direccion,
        tipo,
      };
  
      const agregado=await agregarImagenAreclamo(idreclamo, body)
      if(agregado!=null){
        console.log("imagen agregada");
        
      }
    }
    return (
      <div className='p-2 mt-2 bg-info'>
        <h1>Agregar Imagen a reclamo</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="idreclamo">idreclamo:</label>
            <input
        
              type="number"
              min={1}
              id="idreclamo"
              value={idreclamo}
              onChange={(e) => setIdreclamo(e.target.value)}
              required
            />
            <hr />
            <label htmlFor="direccion">Dirección:</label>
            <input
            className="form-control"
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
            
          </div>
          <div>
            <label htmlFor="tipo">Tipo:</label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="jpeg">JPEG</option>
            </select>
          </div>
          <button  className="btn btn-secondary m-2" type="submit">Enviar</button>
        </form>
      </div>
    );
  };
*/

import React, { useState } from "react";
import { agregarImagenAreclamo } from "../apis/agregarImagenAreclamo"; // Asegúrate de que la ruta sea correcta

const AgregarImagenAReclamo = () => {
  const [idReclamo, setIdReclamo] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();

    const imagenData = {
      direccion: urlImagen,
      tipo: "PNG", // Valor fijo de "PNG"
    };

    try {
      const imagenes = await agregarImagenAreclamo(idReclamo, imagenData);
      setMensaje("Imagen agregada exitosamente");
      alert("Imagen agregada")
      console.log("Lista de imágenes actualizada:", imagenes);
    } catch (error) {
      setMensaje(`Error al agregar imagen: ${error}`);
      alert(`Error al agregar imagen: ${error}`)
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>ID Reclamo:</label>
        <input
          type="number"
          value={idReclamo}
          onChange={(e) => setIdReclamo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL de la Imagen:</label>
        <input
          type="text"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Imagen</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default AgregarImagenAReclamo;
