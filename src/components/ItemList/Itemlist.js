import React from 'react'
import { useEffect, useState } from 'react'
import { ListaDeProductos } from '../../data/Data'
import Item from '../Item/Item';

const Itemlist = () => {
    const [productos, setProductos] = useState([]);

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() =>{
        resolve(ListaDeProductos);
        }, 1500);
    });

    const getProductsFromDB = async () => {
        try{
            const result = await getProductos;
            setProductos(result);
        }   catch (error) {
            alert("Hubo un error, intentalo nuevamente");
        }
    };

    useEffect(() =>{
        getProductsFromDB();
    }, []
    );

    return (
        <div>
            {productos.length ? (
                <>
                    {
                        productos.map((producto) => {
                        return (
                        
                        <div key={producto.id}>
                        <Item     
                            id={producto.id}                           
                            nombre={producto.nombre}
                            precio={producto.precio}
                            stock={producto.stock}
                            imagen={producto.imagen}
                        />
                        </div>
                        );
                        })
                        }
                        </>            
                        ) : 
                    (
                    <h2 className="text-center">Cargando...</h2>
                )
            }
        </div>
    )
}

export default Itemlist
