import React, { useEffect, useState } from "react";
import { fetchAllReclamos } from "../apis/fetchAllReclamos";
import { cambiarEstadoReclamo } from "../apis/cambiarEstadoReclamo";
export const ListaReclamos = () => {
  const [reclamos, setReclamos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [filtro, setFiltro] = useState("");

  const doFetch = async () => {
    const reclamosbuscados = await fetchAllReclamos();
    if (reclamosbuscados != null) {
      let reclamosOrdenados = [...reclamosbuscados];
  
      // Ordenar según el filtro seleccionado
      if (filtro) {
        reclamosOrdenados.sort((a, b) => {
          if (filtro === "numero" ) {
            return a[filtro] - b[filtro]; // Orden numérico
          } else if (filtro === "estado") {
            return a[filtro].localeCompare(b[filtro]); // Orden alfabético
          } 
          if(filtro==="usuario"){
            return a.usuario.nombre.localeCompare(b.usuario.nombre);
          }
          if (filtro === "edificio") {
            return a.edificio.codigo - b.edificio.codigo; // Comparación numérica
          }
          if (filtro === "unidad") {
            return a.unidad.id - b.unidad.id; // Comparación numérica
          }
          if (filtro === "fecha") {
            return new Date(a.fecha) - new Date(b.fecha); // Comparación de fechas
        }


          return 0;
        });
      }
  
      setReclamos(reclamosOrdenados);
    }
  };
  useEffect(() => {
    doFetch();
  }, [refresh]);

  const onCambiarEstado = async (numero, nuevoestado, estadoActual) => {
    if (estadoActual === "terminado") {
      console.log("El reclamo ya está terminado y no se puede modificar.");
      return; // Evita hacer la solicitud si el estado es "terminado"
    }

    const esperar = await cambiarEstadoReclamo(numero, nuevoestado);
    setRefresh(!refresh); // Actualiza la lista de reclamos
  };

  return (
    <div className="border border-dark">
      <h3>Lista de Reclamos:</h3>
      <div>
        <label>Filtrar por: </label>
        <select onChange={(e) => setFiltro(e.target.value)}>
          <option value="">Selecciona un filtro</option>
          <option value="numero">Número</option>
          <option value="edificio">Edificio</option>
          <option value="estado">Estado</option>
          <option value="unidad">Unidad</option>
          <option value="usuario">Usuario</option>
          <option value="fecha">Fecha</option>
        </select>
        <button onClick={doFetch}>Aplicar Filtro</button>
      </div>
      <hr />
      {reclamos.map((elem) => {
        console.log("descripcion", elem.descripcion);

        return (
          <div key={elem.numero} className="p-2">
            <h3>descripcion: {elem.descripcion}</h3>
            <h3 className="bg-primary">numero :{elem.numero}</h3>
            <h3>estado :{elem.estado}</h3>
            <h3>ubicacion :{elem.ubicacion}</h3>
            <h3>fecha :{elem.fecha}</h3>
            <h3>usuario : {elem.usuario.nombre}</h3>
            <div className="d-flex  justify-content-around mb-2">
              <button
                onClick={() => onCambiarEstado(elem.numero, "enProceso")}
                className="btn btn-info"
                disabled={elem.estado === "terminado"}
              >
                Procesar reclamo
              </button>
              <button
                onClick={() => onCambiarEstado(elem.numero, "abierto")}
                className="btn btn-info"
                disabled={elem.estado === "terminado"}
              >
                Abrir reclamo
              </button>
              <button
                onClick={() => onCambiarEstado(elem.numero, "desestimado")}
                className="btn btn-primary"
                disabled={elem.estado === "terminado"}
              >
                Desestimar reclamo
              </button>
              <button
                onClick={() => onCambiarEstado(elem.numero, "terminado")}
                className="btn btn-danger"
                disabled={elem.estado === "terminado"}
              >
                Terminar reclamo
              </button>
              <button
                onClick={() => onCambiarEstado(elem.numero, "anulado")}
                className="btn btn-danger"
                disabled={elem.estado === "terminado"}
              >
                Anular reclamo
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/*
[identificador]
      ,[idreclamo]
      ,[idtiporeclamo]
      ,[descripcion]
      ,[documento]
      ,[estado]
      ,[ubicacion]
*/
