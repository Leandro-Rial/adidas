import React, { Component } from 'react';
import Modelo1 from '../../img/model2.jpg'
import { Link } from 'react-router-dom';

class SignIn extends Component {

    state = {
        user: '',
        password: ''
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
                        <img src={Modelo1} alt="modelo adidas"/>
                    </div>

                    <div className="signin-form">
                        <form action="" onSubmit={this.handleSubmit}>
                            <h2 className="titulo-signin">Iniciar Sesion</h2>
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

                            <button className="button-background">Iniciar Sesion</button>

                            <div className="registrarse">
                                Sino tenes una cuenta, 
                                <Link to="/SignUp">
                                    <h5>Registrate</h5>
                                </Link>
                            </div>
                        </form>

                    
                    </div>
                </div>
            </div>        
            </div>
        )
    }
}

export default SignIn
