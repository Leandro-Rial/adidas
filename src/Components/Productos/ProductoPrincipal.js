import React from 'react'
import { Link } from 'react-router-dom'
import ProductoList from './ProductoList'

const ProductoPrincipal = ({ productos }) => {
    return (
        <div className="product-one">
            {/* PRODUCTO PRINCIPAL */}

            <div className="producto-principal">
                <div className="background-content">
                    <h1 className="titulo-background">Icónicas</h1>
                    <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen. Las zapatillas blancas son un ícono de todos los tiempos.</p>
                    <Link to="/productosVenta">
                        <button className="button-background">Ver Más</button>
                    </Link>
                </div>
            </div>

                {/* OFERTAS DEL DIA */}

                <div className="offer">
                <h1 className="titulo-offer">Ofertas</h1>
                    <p className="texto-offer">Checkea las ofertas del día</p>
                    <Link to="/">
                        <button className="button-background">Ver Más</button>
                    </Link>
                </div>

                {/* LISTA DE PRODUCTOS */}

                <div className="producto-list">
                    <Link to="/">
                        <ProductoList />
                    </Link>
                    <Link to="/">
                        <ProductoList />
                    </Link>
                    <Link to="/">
                        <ProductoList />
                    </Link>
                    <Link to="/">
                        <ProductoList />
                    </Link>
                </div>

                {/* LINK A FUTBOL */}

                <div className="futbol-link">
                    <div className="futbol-link-1">
                        <div className="futbol-contenido">
                            <h1 className="titulo-futbol">Vuelve el fútbol</h1>
                            <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                            <Link to="/futbol">
                                <button className="button-background">Ver Más</button>
                            </Link>
                        </div>
                    </div>

                    <div className="futbol-link-2">
                    <div className="futbol-contenido">
                            <h1 className="titulo-futbol">Vuelve el fútbol</h1>
                            <p className="texto">El tiempo pasa. Las modas cambian. Pero algunas cosas permanecen.</p>
                            <Link to="/futbol">
                                <button className="button-background">Ver Más</button>
                            </Link>
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

export default ProductoPrincipal
