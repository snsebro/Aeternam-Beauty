import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

import "./App.css";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount = async () => {
    this.handleVerify()
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
          <Homepage />
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
        <Route path="/">
          <Footer />
        </Route>
      </>
    );
  }
}

export default withRouter(App);
