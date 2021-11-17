import React from 'react';
import axios from 'axios';
export default function AgregarPersona(props) {
    const [form, setForm] = React.useState ({
        "nombre":"",
        "apellido":"",
        "email":"",
        "alias":""
    })

        const handleChangenombre = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.nombre = e.target.value;
            setForm(newState);
        }
        const handleChangeapellido = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.apellido = e.target.value;
            setForm(newState);
        }
        const handleChangeemail = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.email = e.target.value;
            setForm(newState);
        }
        const handleChangealias = (e) => {
            const newState =JSON.parse(JSON.stringify(form));
            newState.alias= e.target.value;
            setForm(newState);
        }
    
    
     const guardar= async()=> {
        await axios.post('http://localhost:3000/persona', form);
        props.history.push('/');
    
     }
    
        return (
            <div>
                <div>
                    <input type="text" name="nombre" placeholder="nombre" value={form.nombre} onChange={handleChangenombre}/> < br/>
                    <input type="text" name="apellido" placeholder=" apellido" value={form.apellido} onChange={handleChangeapellido}/> < br/>
                    <input type="text" name="email" placeholder="email" value={form.email} onChange={handleChangeemail}/> < br/>
                    <input type="text" name="alias" placeholder=" alias" value={form.alias} onChange={handleChangealias}/>
                   <div>
                       <button onClick={guardar}>Guardar</button>
                       </div>
                    
                </div>
            </div>
        )
    }


   
