import React from 'react';
import { Link } from "react-router-dom";
import Adidas from '../../img/adidas.png';
import Shoe from '../../img/shoe2.png';

const ProductDetails = (props) => {
    
   // const id = props.match.params.id;
    
    return (
        <div>
            <div className="detalle">
                <div className="card">
                    <div className="producto-background">
                        <h1 className="titulo-producto-background">Adidas</h1>
                        <img src={Adidas} alt="Adidas logo" className="logo-detalle"/>
                        <Link to="#" className="compartir-detalle">
                            <i className="fas fa-share-alt"></i>
                        </Link>
                        
                        <img src={Shoe} alt="Shoe" className="shoe-detalle"/>
                    </div>

                    <div className="info-detalle">
                        
                        <div className="shoeName">
                            <h1 className="big">Adidas Runnig</h1>
                            <h3 className="small">Zapatilla para hombre</h3>
                        </div>
                        
                        <div className="descripcion-detalle">
                            <h3 className="titulo-detalle">Producto info</h3>
                            <p className="text-detalle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero itaque aut consectetur.</p>
                        </div>
                        <div className="color-detalle">
                            <h3 className="titulo-color">Color</h3>
                            <div className="colores-detalle">
                                <span className="color" color="blue"></span>
                                <span className="color" color="red"></span>
                                <span className="color" color="green"></span>
                                <span className="color" color="orange"></span>
                                <span className="color" color="black"></span>
                            </div>
                        </div>
                        <div className="talle-detalle">
                            <h3 className="titulo-talle">Talle</h3>
                            <div className="talles">
                                <span className="talle">7</span>
                                <span className="talle">8</span>
                                <span className="talle">9</span>
                                <span className="talle">10</span>
                                <span className="talle">11</span>
                            </div>
                        </div>
                        <div className="buy-price-detalle">
                            <Link to="/Kart" className="Kart-detalle">
                                <i className="fas fa-shopping-cart"></i>
                                    Añadir al carrito
                            </Link>
                            <div className="price-detalle">
                                <i className="fas fa-dollar-sign"></i>
                                <h1>149.99</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
