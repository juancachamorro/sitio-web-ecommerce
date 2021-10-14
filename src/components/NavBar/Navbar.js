import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
    return (
      <div>
        <div className="tienda text-center p-3">
          <h2>Tienda Ecommerce Apple</h2>
        </div>

        <ul className="nav justify-content-center bg-black m-3 p-4">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> <CartWidget count={0}/></a> 
          </li>   
        </ul>
        
      </div>
    )
}

export default Navbar