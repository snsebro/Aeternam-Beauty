import React, { Component, useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";

import {getAllProducts} from "./services/products"

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

import "./App.css";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Shop from "./pages/Shop/Shop";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

class App extends Component {
  state = {
    currentUser: null,
    products: []
  };

  componentDidMount = async () => {
    this.handleVerify()
    this.fetchProducts()
  }

  fetchProducts = async () => {
    const products = await getAllProducts()
    this.setState({products})
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.removeItem("authToken");
    removeToken();
    this.props.history.push("/");
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <>
        <Route path="/">
          <Header currentUser={this.state.currentUser} />
        </Route>
        <Route exact path="/">
          <Homepage products={this.state.products}/>
        </Route>
        <Route path="/login-register">
          <LoginRegister
            currentUser={this.currentUser}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            handleLogout={this.handleLogout}
            history={this.props.history}
          />
        </Route>
        <Route path="/profile">
          <Profile handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/shop"><Shop products={this.state.products} /></Route>
        <Route path="/products/:id"><ProductDetail /></Route>
        <Route path="/">
          <Footer />
        </Route>
      </>
    );
  }
}

export default withRouter(App);
