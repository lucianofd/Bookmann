import React from 'react';
import {Link} from 'react-router-dom';
//import style from './App.css';


export default function Home() {

    return (
        <body className= 'portada'>
          
            <header>Where's my Book</header>
        <div className="row">
            <div className="column">
              <div className= "card">
        <a href="/personas"> Usuario</a>
               </div>
         </div>
         <div className="column">
            <div className="card">
                <Link to="/libros"> Listado De Libros</Link>
            </div>
        </div>
        <div className="column">
            <div className="card" >  
                <Link to="/categoria"> Libros Por Categoria</Link>
            </div>
        </div>

       </div>
       </body>
    );
}