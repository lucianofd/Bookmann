import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function LibrosPorCategorias() {
    const [listado, setListado] = React.useState([]);
    const [error, setError] = React.useState('');
    
    
    const params = useParams();
    console.log( "esto es params" + params)
    

    const traerLibro = async () => {
        try {
            
            const categoriaConsultada = params.id;

        
            const respuesta = await axios.get('http://localhost:3000/libro');
            console.log(respuesta)

            const newListado = respuesta.data.filter(unLibro => unLibro.categoria_id == categoriaConsultada).map(unLibro=>{

            const nuevaEstructuraLibro = JSON.parse(JSON.stringify(unLibro));
            console.log(nuevaEstructuraLibro)
                return nuevaEstructuraLibro;
            
            
            }
            );
            setListado(newListado);
            setError(''); 
        } catch (e) {
            if (e.message == 'Network error') {
                setError('Error al conectar con el servidor');
            } else {
                setError('Otro mensaje que venga del server');
            }
        }

    };

   

    React.useEffect(() => {
        traerLibro();
    }, []);
     

    
    return (
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Libro</th>
                        
                        <th></th>
                    </tr>
                </thead>
  
   
                < tbody>
                    {listado.map( unLibro =>(
                     
                        <tr>
                            <td>{unLibro.nombre}</td>
                            <td>{unLibro.categoria}</td>
                            
                        </tr>
                       
                     )) }

                </tbody>

 
                    
                  
                
            </table>
        </div>
    );
}