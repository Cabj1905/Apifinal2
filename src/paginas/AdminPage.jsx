import React, { useState } from 'react'
import {crearPersona} from "../apis/crearPersona"
import { CrearPersona } from '../formularios/CrearPersona'
import { CrearEdificio } from '../formularios/CrearEdificio'
import { CrearUnidad } from '../formularios/CrearUnidad'
import { CrearReclamo } from '../formularios/CrearReclamo'
import { ListaReclamos } from '../listas/ListaReclamos'
import { otroLogin } from '../apis/otroLogin'
import { BuscarUnidad } from './BuscarUnidad'
import AgregarUnidad from '../formularios/CambiarUnidaddeEdifico'
import DeleteUser from '../formularios/eliminarusuario'
import {obtenerUsuario} from '../apis/loginAdministrador'
import EliminarUnidad from '../formularios/eliminarUnidad'
import EliminarPersona from '../formularios/EliminarPersona '
import EliminarEdificio from '../formularios/EliminarEdificio'
import EliminarDuenioUnidad from '../formularios/EliminarDuenio'


export const AdminPage = ({AdminLogueado ,setAdminLogueado}) => {

  //hacer login como admin

  const [dni, setDni] = useState("")
  const [nombre, setNombre] = useState("")
  const  [logueado, setLogueado] = useState(false)

  const manejarlogin=async()=>{

    const respuesta=await otroLogin(dni,nombre);
    if(respuesta==true){
      console.log("logueado con exito");
      setAdminLogueado(true)
      //setNombre(respuesta.nombre)
    }
  }
   return(
    AdminLogueado?
    <div className='container'>
         <h3>----------AdminPage----------</h3>
         <hr />
        <CrearPersona/>
        <hr />
        <EliminarPersona/>
        <hr/>
        <CrearEdificio/>
        <hr />
        <EliminarEdificio/>
        <hr />
        <CrearUnidad />
        <hr />
        <EliminarUnidad />
        <hr />
        <AgregarUnidad />
        <hr />
        <ListaReclamos/>
        <hr />
        
        <BuscarUnidad/>
        <hr />
        <EliminarDuenioUnidad/>
        <hr/>
        <DeleteUser/>
        <hr />
        

        
        
    </div>:
     <>
     <h3>NO estas logueado</h3>
     <hr />
     <button
       className='btn btn-primary'
       onClick={ ()=>manejarlogin()}
     >LOG IN</button>
     <input 
       type="text" 
       placeholder='ingrese su numero de dni'
       value={dni}
       onChange={(event)=>setDni(event.target.value)}
       />
       <input 
       type="text" 
       placeholder='contraseña'
       value={nombre}
       onChange={(event)=>setNombre(event.target.value)}
       
       />
       <hr />
   </>
   )
}


/*
export const AdminPage = ({AdminLogueado ,setAdminLogueado}) => {
  
  //hacer login como admin

  const [usuario, setDni] = useState("")
  const [contrasena, setNombre] = useState("")
  const  [logueado, setLogueado] = useState(false)
  const [password, setPassword] = useState('');
  
  const [mostrarCrearUsuario, setMostrarCrearUsuario] = useState(false); 
  const [mensaje, setMensaje] = useState('');

  const manejarlogin = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    // Validación básica de campos
    if (!usuario || !contrasena) {
      setMensaje("Por favor, ingrese DNI y contraseña");
      return;
    }

    try {
      const usuario1 = await obtenerUsuario(usuario, contrasena);
  
      if (usuario1.loginExitoso) {
        console.log("Logueado con éxito");
        setAdminLogueado(true);
        setDni(usuario1.usuario);
        setMensaje('');
      } else {
        setMensaje("Credenciales incorrectas");
      }
    } catch (error) {
      setMensaje(error.message || "Error al iniciar sesión");
    }
  };

   return(
    AdminLogueado?
    <div className='container'>
         <h3>----------AdminPage----------</h3>
         <hr />
        <CrearPersona/>
        <hr />
        <CrearEdificio/>
        <hr />
        <CrearUnidad />
        <hr />
        <AgregarUnidad />
        <hr />
        <ListaReclamos/>
        <hr />
        
       
        <BuscarUnidad/>
        <hr />
        <DeleteUser/>
        <hr />
        

        
        
    </div>:
     <>
     <h3>NO estas logueado</h3>
     <hr />
     <div>
     <form onSubmit={manejarlogin}>
       <input 
         type="text"
         placeholder="Usuario"
         value={usuario}
         onChange={(event) => setDni(event.target.value)}
       />
       <input 
         type="contrasena"
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
   </>
   )
}
*/
