import React, { Component, useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { AZ, ZA, lowestFirst, highestFirst } from "./components/sort";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";

import { getAllProducts, createProduct } from "./services/products";

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
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import ProductCreate from "./pages/ProductCreate/ProductCreate";

class App extends Component {
  state = {
    currentUser: null,
    products: [],
    selectValue: "Featured",
  };

  componentDidMount = async () => {
    this.handleVerify();
    this.fetchProducts();
  };

  fetchProducts = async () => {
    const products = await getAllProducts();
    this.setState({ products });
  };

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser });
  };

  handleProductCreate = async (productData) => {
    const newProduct = await createProduct(productData);
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  };

  // handleReviewCreate = async (reviewData) => {
  //   const newReview = await
  // }

  handleSortChange = (event) => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    const { products } = this.state;
    switch (input) {
      case "name-ascending":
        this.setState({
          products: AZ(products),
        });
        break;
      case "name-descending":
        this.setState({
          products: ZA(products),
        });
        break;
      case "price-ascending":
        this.setState({
          products: lowestFirst(products),
        });
        break;
      case "price-descending":
        this.setState({
          products: highestFirst(products),
        });
        break;
      default:
        break;
    }
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
    console.log(currentUser);
    this.setState({ currentUser });
  };

  render() {
    return (
      <>
        <Route path="/">
          <Header currentUser={this.state.currentUser} />
        </Route>
        <Route exact path="/">
          <Homepage
            products={this.state.products}
            currentUser={this.state.currentUser}
          />
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
          <Profile
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
          />
        </Route>
        <Route path="/shop">
          <Shop
            products={this.state.products}
            currentUser={this.state.currentUser}
            handleSortChange={this.handleSortChange}
            selectValue={this.state.selectValue}
          />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail currentUser={this.state.currentUser} />
        </Route>
        <Route path="/products/:id/edit">
          <ProductEdit />
        </Route>
        <Route path="/add-product">
          <ProductCreate handleProductCreate={this.handleProductCreate} />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </>
    );
  }
}

export default withRouter(App);
