import React, { Component } from 'react';
import Modelo2 from '../../img/shoe3.jpg'

class SignUp extends Component {

    state = {
        user: '',
        password: '',
        email: '',
        firstName: '',
        LastName: ''
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
                <div className="signin">
                <div className="formulario">
                    
                    <div className="signin-background">
                        <img src={Modelo2} alt="modelo adidas"/>
                    </div>

                    <div className="signin-form">
                        <form action="" onSubmit={this.handleSubmit}>
                            <h2 className="titulo-signin">Registrarte</h2>
                            <label htmlFor="user">User</label>
                            <input 
                                type="text"
                                id="user"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="First Name">First Name</label>
                            <input 
                                type="text"
                                id="firstName"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="Last Name">Last Name</label>
                            <input 
                                type="text"
                                id="lastName"
                                onChange={this.handleChange}
                            />

                            <button className="button-background">Registrarte</button>
                        </form>

                    
                    </div>
                </div>
            </div>        
            </div>
        )
    }
}

export default SignUp
