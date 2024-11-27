import React from 'react'

//http://localhost:8080/api/unidades/1615/transferir

/*
{
    "documento":"DNI30825333",
    "nombre":"MEDINA, CRISTIAN"
}
*/ 
// transferUnit.js

const transferUnit = async (unitId, personData) => {
  try {
    const response = await fetch(`http://localhost:8080/api/unidades/${unitId}/transferir`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personData),
    });

    if (response.status === 200) {
      const data = await response.json();
      return { success: true, data };
    } else if (response.status === 404) {
      return { success: false, message: 'Unidad o persona no encontrada' };
    } else {
      return { success: false, message: 'Error inesperado' };
    }
  } catch (error) {
    return { success: false, message: 'Error en la conexión con el servidor' };
  }
};

export default transferUnit;

