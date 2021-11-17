import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListadoCategoria() {
  const [listado, setListado] = React.useState([]);
  const [error, setError] = React.useState("");

  const traerCategorias = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/categoria");
      setListado(respuesta.data);
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
    traerCategorias();
  }, []);

const borrarCategoria= async(idCategoriaABorrar)=>{
  try{
    await axios.delete('http://localhost:3000/categoria/' + idCategoriaABorrar);
  traerCategorias();
  }catch (e) {}

 
}

  return (
    <div>
        <nav>
        <Link to={"/"}>Inicio</Link>
        </nav>
        <br/>
       <Link to={"/categoria/agregar"}>Agregar</Link> <br />
      <div>
        <p>Categorias</p>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
            </tr>
          </thead>
          <tbody>
            {listado.map((unaCategoria, index) => (
              <tr key={index}>
                <td>{unaCategoria.nombre}</td>
                <td>
                  <button onClick={() => borrarCategoria(unaCategoria.id)}>
                    Borrar
                  </button>
                  </td>
                  <td>
                 <Link to={"categoria/consulta/"  + unaCategoria.id.toString()}>Libros Asociados</Link>
                 
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}