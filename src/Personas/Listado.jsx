import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Listado() {
  const [lista, setLista] = React.useState([]);
  const [error, setError] = React.useState("");

  const traerPersonas = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/persona");
      setLista(respuesta.data);
      setError("");
    } catch (e) {
      if (e.message === "Network error") {
        setError("NO SE PUEDE CONECTAR AL SERVIDOR");
      } else {
        setError("no se puede traer la lista");
      }
    }
  };

  React.useEffect(() => {
    traerPersonas();
  }, []);

  const borrarPersona = async (idPersonaABorrar) => {
    console.log("hola", idPersonaABorrar);
    try {
      await axios.delete("http://localhost:3000/persona/" + idPersonaABorrar);
      traerPersonas();
    } catch (e) {}
  };

  return (
    <div>
      <Link to={"/"}>Inicio</Link>
      <br/>
      <Link to={"/persona/agregar"}>Agregar</Link>
      <br />
      Listado de personas
      <div> {error ? <> error de conexion </> : <></>}</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Alias</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((unaPersona, index) => (
              <tr key={index}>
                <td>{unaPersona.nombre}</td>
                <td>{unaPersona.apellido}</td>
                <td>{unaPersona.email}</td>
                <td>{unaPersona.alias}</td>
                <td>
                  <Link to={"/persona/editar/" + unaPersona.id}>Editar</Link>
                  <button onClick={() => borrarPersona(unaPersona.id)}>Borrar</button>
                  
                    
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
