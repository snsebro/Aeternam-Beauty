import React, { Component } from "react";
import "./LoginRegister.css";

export default class LoginRegister extends Component {
  state = {
    login: {
      username: "",
      password: ""
    },
    register: {
      name: "",
      username: "",
      password: ""
    }
  };

  // handleInput = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  handleLoginInput = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      login: { ...prevState.login, [name]: value }}));
  };

  handleRegisterInput = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      register: { ...prevState.register, [name]: value }}));
  };

  render() {
    return (
      <div className="login-register">
        <div className="account-links">
          <h5>MY ACCOUNT</h5>
          <h5>CREATE ACCOUNT</h5>
          <h5>CONTACT US</h5>
        </div>
        <div className="login">
          <h3>LOGIN TO MY ACCOUNT</h3>
          <form>
            <label>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                onChange={this.handleLoginInput}
              ></input>
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                onChange={this.handleLoginInput}
              ></input>
            </label>
            <button>LOGIN</button>
          </form>
        </div>
        <div className="register">
          <h3>CREATE AN ACCOUNT</h3>
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="FULL NAME"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="password"
                name="password-confirm"
                placeholder="CONFIRM PASSWORD"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <button>REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
}
