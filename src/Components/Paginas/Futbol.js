import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Futbol extends Component {
    render() {
        return (
            <div>
                {/* PRODUCTO PRINCIPAl */}

                <div className="producto-principal-futbol">
                    <div className="background-content-futbol">
                        <h1 className="titulo-background-futbol">FIFA MOBILE</h1>
                        <p className="texto-futbol">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                        <Link to="/productosVenta">
                            <button className="button-background">Ver Más</button>
                        </Link>
                    </div>
                </div>

                {/* PRODUCTOS */}

                <div className="calcio">
                    <div className="calcio-presentacion">
                        <h1>welcome to world of fútbol</h1>
                    </div>
                    <hr/>
                    <div className="calcio-productos">
                        
                        

                        <div className="calcio-botines">
                            <div className="calcio-contenido">
                                <h1 className="titulo-futbol">BOTINES</h1>
                                <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                                <Link to="/productosVenta">
                                    <button className="button-background">Ver Más</button>
                                </Link>
                            </div>
                        </div>
                   
                        <div className="calcio-camisetas">
                            <div className="calcio-contenido">
                                <h1 className="titulo-futbol">CAMISETAS</h1>
                                <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                                <Link to="/productosVenta">
                                    <button className="button-background">Ver Más</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="calcio-productos">
                
                        <div className="calcio-uniforme">
                            <div className="calcio-contenido">
                                <h1 className="titulo-futbol">UNIFORMES</h1>
                                <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                                <Link to="/productosVenta">
                                    <button className="button-background">Ver Más</button>
                                </Link>
                            </div>
                        </div>

                        <div className="calcio-accesorios">
                            <div className="calcio-contenido">
                                <h1 className="titulo-futbol">ACCESORIOS</h1>
                                <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                                <Link to="/productosVenta">
                                    <button className="button-background">Ver Más</button>
                                </Link>
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
