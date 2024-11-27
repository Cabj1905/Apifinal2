import React from 'react'

export const agregarDuenio = async(idunidad,documento) => {
  console.log("AGREGANDO DUENIO");
  console.log("http://localhost:8080/api/unidades/${idunidad}/agregarduenio");
  console.log({documento});
  
  
  try {
      // Realizar la solicitud PUT
      const respuesta = await fetch(`http://localhost:8080/api/unidades/${idunidad}/agregarduenio`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ documento:documento }) 
      });

      if (respuesta.ok) {
        alert('Dueño agregado con éxito.');
        return "dueño agregado"
      } else {
        throw new Error(
          ` Error al obtener la unidad: ${respuesta.status} ${respuesta.statusText}`
        );
      }
    } catch (error) {
      alert(`Hubo un error: ${error.message}`);
      console.error('Error en la solicitud:', error);
      return null;
      //setMensaje('Error en la conexión con el servidor.');
    }
  };
  

