import React, { Component } from 'react';
import shoe6 from '../../img/shoe6.jpg';
import shoe7 from '../../img/shoe7.png';
import River from '../../img/camiseta-uniforme-de-visitante-river-plate-sin-sponsor.jpg';
import buzo from '../../img/Buzo.jpg';
import lompaArg from '../../img/Pantalon_de_entrenamiento_Argentina_Negro.jpg';

export default class ProductosVenta extends Component {
    render() {
        return (
            <div>
                <div className="producto-ventas">
                <div className="titulo-ventas">
                    <h1>TODOS LOS PRODUCTOS</h1>
                </div>
                <hr/>
                <div className="contenido-ventas">
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={shoe7} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Zapatillas para hombre</h3>
                            <h1>ZAPATILLA ADIDAS</h1>
                            <h2>$250</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={shoe6} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Zapatillas para hombre</h3>
                            <h1>ZAPATILLA ADIDAS</h1>
                            <h2>$250</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={shoe7} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Zapatillas para hombre</h3>
                            <h1>ZAPATILLA ADIDAS</h1>
                            <h2>$250</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={shoe6} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Zapatillas para hombre</h3>
                            <h1>ZAPATILLA ADIDAS</h1>
                            <h2>$250</h2>
                        </div>
                    </div>
                
                </div>
            </div>

            
            <div className="producto-ventas">
                <div className="ofertas-ventas">
                <h1 className="titulo-offer-ventas">Ofertas</h1>
                <p className="texto-offer-ventas">Compra ahora y obten un 30% en las siguientes compras del mes de agosto</p>
                </div>
                <div className="contenido-ventas">
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={River} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Camiseta para hombre</h3>
                            <h1>CAMISETA DE RIVER</h1>
                            <h2>$550</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={buzo} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Buzo para mujer</h3>
                            <h1>BUZO ADIDAS</h1>
                            <h2>$150</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={River} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Camiseta para hombre</h3>
                            <h1>CAMISETA DE RIVER</h1>
                            <h2>$550</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={buzo} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Buzo para mujer</h3>
                            <h1>BUZO ADIDAS</h1>
                            <h2>$150</h2>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <div className="producto-ventas">
                <div className="contenido-ventas">
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={lompaArg} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Pantalon para hombre</h3>
                            <h1>PANTALON DE ARGENTINA</h1>
                            <h2>$750</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={lompaArg} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Pantalon para hombre</h3>
                            <h1>PANTALON DE ARGENTINA</h1>
                            <h2>$750</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={lompaArg} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Pantalon para hombre</h3>
                            <h1>PANTALON DE ARGENTINA</h1>
                            <h2>$750</h2>
                        </div>
                    </div>
                   
                    <div className="caja-ventas">
                        <div className="background-ventas">
                            <img src={lompaArg} alt=""/>
                        </div>
                        <div className="info-ventas">
                            <h3>Pantalon para hombre</h3>
                            <h1>PANTALON DE ARGENTINA</h1>
                            <h2>$750</h2>
                        </div>
                    </div>
                
                </div>
            </div>
            
            {/* FOOTER */}

                <footer>
                    <h1 className="footer-titulo">Derechos reservados</h1>
                </footer>

            </div>
        )
    }
}

