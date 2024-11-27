import React from 'react'

export const agregarInquilino2 = async(idunidad,documento) => {
  //http://localhost:8080/api/unidades/${1}/alquilar
  try {
    // Realizar la solicitud PUT
    const respuesta = await fetch(`http://localhost:8080/api/unidades/${idunidad}/agregarinquilino`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: documento // Enviar el documento en el cuerpo de la solicitud
    });

    if (respuesta.ok) {
      console.log('Inquilino agregado con éxito.');
      return "inquilino agregado"
    } else {
        throw new Error(
          ` Error al obtener al agregar inquilino: ${respuesta.status} ${respuesta.statusText}`
        );
    }
  } catch (error) {
    
    alert(error)
    console.error('Error en la solicitud:', error);
    return null;
    //setMensaje('Error en la conexión con el servidor.');
  }
}
