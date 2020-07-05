import React from 'react';
import Shoe from '../../img/shoe2.png'

const Producto = () => {
    return (
        <div>
            <div className="products">
                <img src={Shoe} alt="Shoe" className="Shoe"/>
                <span className="card-title">Zapatillas</span>
            </div>
        </div>
    )
}

export default Producto
