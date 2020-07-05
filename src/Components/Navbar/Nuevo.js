import React from 'react';
import { Link } from "react-router-dom";

function Nuevo() {

  return (
    <div>
        <div>
            <nav className="nav-right-nuevo">
              <ul>
                <li>
                  <Link to="/SignIn" className="SignIn"><i className="fas fa-sign-in-alt"></i></Link>
                  <Link to="#" className="Settings"><i className="fas fa-cog"></i></Link>
                </li>
              </ul>
            </nav>
        </div>
      </div>
  );
}

export default Nuevo;
