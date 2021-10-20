import React,{useState} from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'



function ItemDetail() {

    const [ocultar,setOcultar]=useState(true);
    
    
  
    return(
        <div>
           
              {ocultar?<h1>Bienvenidos!!!</h1>:null}
              <button onClick={()=>setOcultar(!ocultar)} >Ocultar</button>
    
        </div>

    );
}
  
  export default ItemDetail;
