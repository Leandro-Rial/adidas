import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Contenido from '../src/Components/Content/Contenido';
import ProductDetails from '../src/Components/Productos/ProductDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp'
import ProductosVenta from './Components/Productos/ProductosVenta';
import Futbol from './Components/Paginas/Futbol';
import Contacto from './Components/Paginas/Contacto';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Contenido} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/productosVenta" component={ProductosVenta} />
            <Route path="/futbol" component={Futbol} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
  )}};

export default App;
