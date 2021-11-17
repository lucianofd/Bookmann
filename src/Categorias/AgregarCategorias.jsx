import React from "react";
import axios from "axios";
export default function AgregarCategorias(props) {

  const [form, setForm] = React.useState({
    "nombre": "",
  });
  
const handleChangenombre= (e) => {
  const newState =JSON.parse(JSON.stringify(form));
            newState.nombre = e.target.value;
            setForm(newState);
}

const guardar= async()=> {
  await axios.post('http://localhost:3000/categoria', form);
  props.history.push('/categoria');}


  return (
    <div>
     
                    <input type="text" name="nombre" placeholder="nombrenuevacategoria" value={form.nombre} onChange={handleChangenombre}  /> 
                    <div>
                       <button onClick={guardar}>Guardar</button>
                       </div>
</div>
    
  )

}
