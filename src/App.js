import style from './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Listado from "./Personas/Listado";
import EditarPersona from "./Personas/EditarPersona";
import AgregarPersona from "./Personas/AgregarPersona";
import ListadoLibros from "./Libros/ListadoLibros";
import AgregarLibro from "./Libros/AgregarLibro";
import EditarLibro from "./Libros/EditarLibro";
import PrestarLibro from "./Libros/PrestarLibro";
import DevolverLibro from "./Libros/DevolverLibro";
import AgregarCategoria from "./Categorias/AgregarCategorias";
import ListadoCategoria from "./Categorias/ListadoCategoria";
import LibrosPorCategorias from "./Categorias/Consulta";





function App() {
  return (
    
    <div>
      
      <Router>
        <Route exact path="/" component={Home}/>
       
       <Route exact path="/personas" component={Listado} />
       <Route exact path="/persona/editar/:id" component={EditarPersona} />
       <Route exact path="/persona/agregar" component ={AgregarPersona}/>
       

       <Route exact path="/libros" component={ListadoLibros} />
       <Route exact path="/libro/editar/:id" component={EditarLibro} />
       <Route exact path="/libro/agregar" component ={AgregarLibro}/>
       <Route exact path="/libro/prestar/:id" component ={PrestarLibro}/>
       <Route exact path="/libro/devolver/:id" component ={DevolverLibro}/>
       
       <Route exact path="/categoria/agregar" component={AgregarCategoria}/>
       <Route exact path="/categoria" component={ListadoCategoria}/>
       <Route exact path="/categoria/consulta/:id" component={LibrosPorCategorias}/>
       

    
       </Router>
       </div>    
    
   
  );
}

export default App;