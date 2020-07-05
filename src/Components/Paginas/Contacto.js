import React, { Component } from 'react'
import adidas from '../../img/adidas.png'

export default class Contacto extends Component {

    state = {
        user: '',
        email: '',
        firstName: '',
        LastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="contacto">
                    <div className="titulo-contacto">
                        <h1>Contacta con nosotros</h1>
                    </div>

                    <div className="contacto-pag">
                        <form action="" onSubmit={this.handleSubmit} className="contacto-form">
                                <label htmlFor="user">User</label>
                                <input 
                                    type="text"
                                    id="user"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="email">Correo electronico</label>
                                <input 
                                    type="text"
                                    id="email"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="First Name">Nombre</label>
                                <input 
                                    type="text"
                                    id="firstName"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="Last Name">Apellido</label>
                                <input 
                                    type="text"
                                    id="lastName"
                                    onChange={this.handleChange}
                                />

                                <button className="button-background">Enviar</button>
                        </form>
                    
                        <div className="contacto-adidas">
                            <img src={adidas} alt="" className="adidas-contacto"/>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
