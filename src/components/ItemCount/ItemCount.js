import React, {useState} from 'react'

import './ItemCount.css'

const Item = ({stock, initial, onAdd}) => {

    const [clicks, setClicks] = useState(initial);

    const addClick = (numero) => {
        setClicks(clicks + numero);
    };    

    return (        
        <div>
            
            <div> 
                <button className="btn btn-primary m-2 botones" onClick={()=>addClick(+1)} disabled={clicks === stock ? true : null}>+</button>
                <span>{clicks}</span> 
                <button className="btn btn-primary m-2  botones" onClick={()=>addClick(-1)} disabled={clicks === initial ? true : null}>-</button>      
            </div>
                <button className="btn btn-success botones" onClick={()=>onAdd(clicks)} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        
        </div>
    );
};
  
 




export default Item
