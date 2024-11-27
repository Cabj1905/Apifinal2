import React,{useState} from 'react'
import { ListaEdificios } from '../listas/ListaEdificios'
import { ListaPersonas } from '../listas/ListaPersonas'
import { ListaUnidades } from '../listas/ListaUnidades'
import { otroLogin } from '../apis/otroLogin'

export const HomePage = ({AdminLogueado ,setAdminLogueado}) => {

  const [dni, setDni] = useState("")
  const [nombre, setNombre] = useState("")
  const  [logueado, setLogueado] = useState(false)

  const manejarlogin=async()=>{

    const respuesta=await otroLogin(dni,nombre);
    if(respuesta==true){
      console.log("logueado con exito");
      setAdminLogueado(true)
      //setNombre(respuesta.nombre)
    } else{
      alert("Error en logearse")
    }
  }

  
  return (
    AdminLogueado?
    <div className='container'>
      <h3 >Listas</h3>
      <hr />
      <ListaEdificios/>
      <hr />
      <ListaPersonas/>
      <hr />
      <ListaUnidades/>
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
