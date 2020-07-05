import React from 'react';
import { Link } from "react-router-dom";

function Logeado() {
  return (
    <div>
        <div className="App">

            <nav className="nav-right">
              <Link to="/user" className="User"><i className="fas fa-user"></i></Link>
              <Link to="/SignIn" className="SignOut"><i className="fas fa-sign-out-alt"></i></Link>
              <Link to="#" className="Settings"><i className="fas fa-cog"></i></Link>
              <Link to="/Kart" className="Kart"><i className="fas fa-shopping-cart"></i></Link>
            </nav>

        </div>
      </div>
  );
}

export default Logeado;
