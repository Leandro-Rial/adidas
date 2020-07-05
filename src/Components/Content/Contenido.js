import React, { Component } from 'react'
import ProductoPrincipal from '../Productos/ProductoPrincipal'
import { connect } from 'react-redux'

class Contenido extends Component {
    render (){

        //console.log(this.props)
        const { productos } = this.props;

        return (
            <div className="contenido">
                <div className="productos">
                    <ProductoPrincipal productos={productos} />
                </div>
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        productos: state.producto.productos
    }
}

export default connect(mapStateToProps)(Contenido)

