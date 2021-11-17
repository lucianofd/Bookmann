import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function ListadoLibros() {
  const [listado, setListado] = React.useState([]);
  const [error, setError] = React.useState("");

  const traerLibro = async () => {
    try {
      const respuestaLibros = await axios.get("http://localhost:3000/persona");
            const listadoPersonas = respuestaLibros.data;
            const respuesta = await axios.get("http://localhost:3000/libro");
            const newListado = respuesta.data.map(unLibro => {
                const personaAsociada = listadoPersonas.find(unaPersona => unaPersona.id == unLibro.persona_id);
                const nuevaEstructuraLibro = JSON.parse(JSON.stringify(unLibro));
                nuevaEstructuraLibro.persona = personaAsociada
                    ? personaAsociada.alias
                    : '';
                return nuevaEstructuraLibro;
              });
      setListado(newListado);
      setError("");
    }
     catch (e) {
      if (e.message === "Network error") {
        setError("NO SE PUEDE CONECTAR AL SERVIDOR");
      } else {
        setError("no se puede traer la lista");
      }
    }
  };

  React.useEffect(() => {
    traerLibro();
  }, []);

  const borrarLibro = async (idLibroABorrar) => {
    console.log("borrado", idLibroABorrar);
    try {
      await axios.delete("http://localhost:3000/libro/" + idLibroABorrar);
      traerLibro();
    } catch (e) {}
  };

  return (
    <div>
      <Link to={"/"}>Inicio</Link>
      <br/>
    
      <h1 className= "card">Listado de libros</h1>
      <button>
      <Link to={"/Libro/agregar"}>Agregar Libro al Listado</Link>
      </button>
      
      <div> {error ? <> error de conexion </> : <></>}</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Alias </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {listado.map(unLibro => (
                        <tr>
                            <td>{unLibro.nombre}</td>
                            <td>{unLibro.descripcion}</td>
                            <td>{unLibro.categoria_id}</td>
                            <td>{unLibro.persona}</td>
                           
                            <td>

                                <Link to={"/libro/editar/" + unLibro.id.toString()}>Editar</Link> 
                                <Link onClick={() => borrarLibro(unLibro.id)}>Borrar</Link> 
                                <Link to={"/libro/prestar/" + unLibro.id.toString()}>Prestar</Link>
                                <Link to={"/libro/devolver/" + unLibro.id.toString()}>Devolver</Link>
                            </td>
                        </tr>
                    ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}