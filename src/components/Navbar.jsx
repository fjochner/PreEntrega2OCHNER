import React from 'react'
import CartWidget from './CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <span className="navbar-brand">WAREHOUSE</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><span className="nav-link"><a href="#">Muebles de Madera</a></span></li>
            <li className="nav-item"><span className="nav-link"><a href="#">Ofertas</a></span></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar