import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function DevolverLibro(props) {
    const params = useParams();
    const [form, setForm] = React.useState ({
        "nombre": "",
        "persona_id": ""
    })

    
    const buscarLibroPorId = async (idLibro) => {
       
        try {
            const respuesta = await axios.get('http://localhost:3000/libro/'+ params.id, form);
            setForm(respuesta.data)

        }catch (e){

        }
    }

    React.useEffect (()=> {
        if(!params.id) return;
        buscarLibroPorId(params.id)
    }, [params])

    const handleChangepersona_id = (e) => {
      
        const newState =JSON.parse(JSON.stringify(form));
        newState.persona_id = e.target.value;
        setForm(newState);
    };
   
    

 const guardar= async()=> {


     await axios.put('http://localhost:3000/libro/devolver/'+ params.id, form);
     
    props.history.push('/libros');

 };

    return (
        <div>
            <div>
            <input type="text" name="nombre" placeholder="nombre" value={form.nombre}/>
            <input type="text" name="persona_id" placeholder="Usuario Id" value={form.persona_id} onChange={handleChangepersona_id}/> < br/>
                
               <div><button onClick={guardar}>Guardar</button></div>
                
            </div>
        </div>
    );
}