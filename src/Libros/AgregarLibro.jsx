import React from 'react';
import axios from 'axios';
export default function AgregarLibro(props) {
    const [form, setForm] = React.useState ({
        "nombre":"",
        "descripcion":"",
        "categoria_id":""
    })

        const handleChangenombre = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.nombre = e.target.value;
            setForm(newState);
        }
        const handleChangedescripcion = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.descripcion = e.target.value;
            setForm(newState);
        }
        const handleChangecategoria = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.categoria_id = e.target.value;
            setForm(newState);
        }
       

    
     const guardar= async()=> {
        await axios.post('http://localhost:3000/libro', form);
        props.history.push('/libros');
    
     }
    
        return (
            <div>
                <div>
                    <input type="text" name="nombre" placeholder="nombre" value={form.nombre} onChange={handleChangenombre}/> < br/>
                    <input type="text" name="descripcion" placeholder=" descripcion" value={form.descripcion} onChange={handleChangedescripcion}/> < br/>
                    <input type="text" name="categoria" placeholder="categoria" value={form.categoria_id} onChange={handleChangecategoria}/> < br/>
                    
                   <div>
                       <button onClick={guardar}>Guardar</button>
                       </div>
                    
                </div>
            </div>
        )
    }


   
