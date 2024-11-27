import React from 'react'


//http://localhost:8080/api/personas/login/DNI 89231201/jorge
export const otroLogin = async(dni,nombre) => {
    try {
        
        // Codifica el DNI para que sea seguro en la URL
        const encodedDni = encodeURIComponent(`DNI ${dni}`);
        const url = `http://localhost:8080/api/personas/login/${encodedDni}/${nombre}`;
        console.log("la url es"+url);
        
        // Enviar la información al backend usando fetch
        const respuesta = await fetch(url, {
            method: 'GET', // El método de la solicitud es POST
            //method:'GET',
            headers: {
              'Content-Type': 'application/json', // Indica que el contenido es JSON
            },
        });
  
        // Manejar la respuesta del servidor
        if (respuesta.ok) {
          const bandera = await respuesta.json();
          return bandera; //true o false
          //setMensaje('Unidad creada con éxito.');
        } else {
          alert("Usuario o contraseña incorrectos. Intenta nuevamente.");
          console.log('Hubo un error en el login.');
          return null;
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la conexión con el servidor.');
        return null;
      }
}
