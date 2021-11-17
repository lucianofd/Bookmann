import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function EditarLibro(props) {
    const params = useParams();
    const [form, setForm] = React.useState ({
        "nombre":"",
        "descripcion":"",
        "categoria_id":""
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

    const handleChangenombre = (e) => {
        const newState =JSON.parse(JSON.stringify(form));
        newState.nombre = e.target.value;
        setForm(newState);
    };
    const handleChangedescripcion = (e) => {
        const newState =JSON.parse(JSON.stringify(form));
        newState.descripcion = e.target.value;
        setForm(newState);
    };
    const handleChangecategoria = (e) => {
        const newState =JSON.parse(JSON.stringify(form));
        newState.categoria_id = e.target.value;
        setForm(newState);
    };
    

 const guardar= async()=> {
       await axios.put('http://localhost:3000/libro/'+ params.id, form);
    props.history.push('/libros');

 };

    return (
        <div>
            <div>
                <input type="text" name="nombre" placeholder="nombre" value={form.nombre} onChange={handleChangenombre}/> < br/>
                <input type="text" name="descripcion" placeholder=" descripcion" value={form.descripcion} onChange={handleChangedescripcion}/> < br/>
                <input type="text" name="categoria_id" placeholder="categoria" value={form.categoria_id} onChange={handleChangecategoria}/> < br/>
                
               <div><button onClick={guardar}>Guardar</button></div>
                
            </div>
        </div>
    );
}