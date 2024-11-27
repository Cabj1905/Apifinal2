

/*
export const UserPage = ({UserLogueado ,setUserLogueado}) => {
  //fetch mis reclamos
  //fetch mis unidades
  //fetch
  
  const [dni, setDni] = useState("")
  const [nombre, setNombre] = useState("")
  const  [logueado, setLogueado] = useState(false)

  const manejarlogin=async()=>{

    const respuesta=await otroLogin(dni,nombre);
    if(respuesta==true){
      console.log("logueado con exito");
      setUserLogueado(true)
      //setNombre(respuesta.nombre)
    }
  }
  
    
  return (
    UserLogueado ? (
      <div className='container'>
        <h3>----------UserPage ---------</h3>
        <hr />
        <ReclamosUsuario />
        <hr />
        <CrearReclamo />
        <hr />
        <AgregarImagenAReclamo />
        <hr />
      </div>
    ) : (
      <Login setUserLogueado={setUserLogueado} />  {/* Usa tu componente de Login */

/*
<h3> faltaria hacer estos endpoints:</h3>
      <h3>--traer todas las unidades de un usuario dado su dni</h3>
      <hr />
      <h3>--traer todos los reclamos de un usuario dado su dni</h3>
      <hr />
      <h3>--agregar una imagen a un reclamo existeten usando id reclamo</h3>
      <hr />
*/ 

import React, { useState } from 'react';
import CrearReclamo from '../formularios/CrearReclamo';
import AgregarImagenAReclamo from '../formularios/AgregarImagenAReclamo';
import ReclamosUsuario from '../formularios/ObtenerReclamosPropios';
import { obtenerUsuario } from '../apis/ObtenerUsuario'; // Asegúrate de tener esta función importada correctamente
import CrearUsuario from '../formularios/CrearUsuario';
import UpdatePassword from '../formularios/updatePassword'
import ReclamosPorEdificio from '../formularios/ReclamosPorEdificio'
import "./style.css/userpage.css"



//NO TOCAR EN LO MÁS MÍNIMO

export const UserPage = ({ UserLogueado, setUserLogueado }) => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarCrearUsuario, setMostrarCrearUsuario] = useState(false); 
  const [mensaje, setMensaje] = useState('');
  const [edificioId, setEdificioId] = useState(1);

  const [nombre, setNombre] = useState('');

  const manejarlogin = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    // Validación básica de campos
    if (!dni || !password) {
      setMensaje("Por favor, ingrese DNI y contraseña");
      return;
    }

    try {
      const usuario = await obtenerUsuario(dni, password);
  
      if (usuario.loginExitoso) {
        console.log("Logueado con éxito");
        setUserLogueado(true);
        setDni(usuario.dni);
        setMensaje('');
      } else {
        setMensaje("Credenciales incorrectas");
      }
    } catch (error) {
      setMensaje(error.message || "Error al iniciar sesión");
    }
  };

  


  // Muestra el login o el contenido protegido
  return (
    UserLogueado ? (
      <div className='container'>
        <h3>---------- UserPage ---------</h3>
        <hr />
        <ReclamosUsuario dniUsuario={dni} />
        <hr />
        <ReclamosPorEdificio idEdificio={edificioId}/>
        <hr/>
        <CrearReclamo  />
        <hr />
        <AgregarImagenAReclamo dniUsuario={dni}/>
        <hr />
        <UpdatePassword dniUsuario={dni}/>
        
      </div>
    ) : (
      <>
        <div>
        <form onSubmit={manejarlogin}>
          <input 
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(event) => setDni(event.target.value)}
          />
          <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">
            Iniciar Sesión
          </button>
          
          {mensaje && <p style={{color: 'red'}}>{mensaje}</p>}
        </form>
      </div>

        <hr />
        <h3>CREAR CUENTA</h3> {/* Título para crear cuenta */}
        <CrearUsuario /> {/* Componente para crear cuenta siempre visible */}
      </>
    )
  );
};






