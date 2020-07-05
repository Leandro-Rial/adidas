import React from 'react';
import { Link } from "react-router-dom";
import Nuevo from './Nuevo';
import Adidas from '../../img/adidas.png'
// import Logeado from './Logeado';

function Navbar() {
  return (
    <div>
        <div className="App">
          <Link to="/">
            <img src={Adidas} alt="Logo Adidas" className="logo" />
          </Link>

            <nav className="nav">
              <ul>
                <li>
                  <Link to="/productosVenta" className="link">Hombre</Link>
                </li>
                <li>
                  <Link to="/productosVenta" className="link">Mujer</Link>
                </li>
                <li>
                  <Link to="/productosVenta" className="link">Niño</Link>
                </li>
                <li>
                  <Link to="/productosVenta" className="link"><strong>Deporte</strong></Link>
                </li>
                <li>
                  <Link to="/contacto" className="link"><strong>Contacto</strong></Link>
                </li>
              </ul>
            </nav>

            <nav className="nav-right">
              <ul>
                <li>
                  {/* <Logeado /> */}
                  <Nuevo />
                </li>
              </ul>
            </nav>
        </div>
      </div>
  );
}

export default Navbar;
