import React from 'react'
import carrito from '../../images/carrito.png'

const CartWidget = ({count}) => {
    return (
            <div>
                <img width="30px" src={carrito} alt=""/>
                <h2>{count}</h2>
            </div>
    )
}

export default CartWidget
