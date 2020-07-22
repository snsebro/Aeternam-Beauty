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
      password: "",
      is_admin: false
    },
    passwordConfirm: ""
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value });
  };

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

  passwordMatch = () => {
    if (this.state.register.password === this.state.passwordConfirm) {
      return
    } else {

    }
  }

  render() {
    const { name, username, password } = this.state.register
    const { handleRegister, handleLogin, history } = this.props
    
    return (
      <div className="login-register">
        <div className="account-links">
         <a href="/login-register"><h5>MY ACCOUNT</h5></a>
         <a href="/login-register"><h5>CREATE ACCOUNT</h5></a>
         <a href="#"><h5>CONTACT US</h5></a>
        </div>
        <div className="login">
          <h3>LOGIN TO MY ACCOUNT</h3>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleLogin(this.state.login)
            history.push("/")
          }}>
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
          <form onSubmit={(e) => {
            e.preventDefault()
            handleRegister(this.state.register)
            history.push("/")
          }}>
            <label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="FULL NAME"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="USERNAME"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="PASSWORD"
                onChange={this.handleRegisterInput}
              ></input>
            </label>
            <label>
              <input
                type="password"
                name="passwordConfirm"
                placeholder="CONFIRM PASSWORD"
                onChange={this.handleInput}
              ></input>
            </label>
            <button disabled={this.state.passwordConfirm === password ? false : true}>REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
}
