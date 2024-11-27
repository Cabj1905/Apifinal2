import React from 'react'

/*
export const agregarImagenAreclamo = async(idreclamo,body) => {
    try {
        // Realizar la petición POST
        const response = await fetch(`http://localhost:8080/api/reclamos/agregarimagen/${idreclamo}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (response.ok) {
          // Maneja la respuesta exitosa
          const data = await response.json();
          console.log('Imagen agregada correctamente:', data);
          return data;
        } else {
          // Maneja errores en la respuesta
          console.error('Error al agregar la imagen');
          return null;
        }
      } catch (error) {
        // Maneja errores de la petición
        console.error('Error en la petición:', error);
        return null;
      }
    };
*/

const BASE_URL = "http://localhost:8080/api/reclamos"; // Asegúrate de que esta URL sea la correcta

export const agregarImagenAreclamo = async (idReclamo, imagenData) => {
  try {
    const response = await fetch(`${BASE_URL}/agregarimagen/${idReclamo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imagenData), // Convierte el objeto en JSON
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al agregar imagen");
    }

    return await response.json(); // Devuelve la lista de imágenes del reclamo
  } catch (error) {
    console.error("Error al agregar imagen:", error);
    throw error.message;
  }
};

