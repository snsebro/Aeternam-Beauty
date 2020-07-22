import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingBagIcon } from "../../frontend_assets/shopping-bag-icon.svg";
import { ReactComponent as SearchIcon } from "../../frontend_assets/search-icon.svg";
import { ReactComponent as ProfileIcon } from "../../frontend_assets/profile-icon.svg";
import "./Header.css";

export default class Header extends Component {
  state = {
    promotion:
      "SUMMER SALE! SAVE 15% OFF YOUR NEXT ORDER WITH THE CODE ‘GA-20’ AT CHECKOUT",
    endDate: "ENDS 7/23 AT 11:59 P.M. EST",
  };

  render() {
    return (
      <header>
        <div className="aeternam" id="aeternam">
          <a href="/">
            <h1>AETERNAM BEAUTY</h1>
          </a>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/shop">SALE</Link>
              </li>
              <li>
                <Link to="/">COLLECTIONS</Link>
              </li>
              <li>
                <Link to="/">LOOKS</Link>
              </li>
              <li>
                <Link to="/">INSPO</Link>
              </li>
            </ul>
          </div>
          <div className="nav-icons">
            <Link to={this.props.currentUser ? "/profile" : "/login-register"}>
              <ProfileIcon className="icon" />
            </Link>
            <Link to="/">
              <SearchIcon className="icon" />
            </Link>
            <Link to="/">
              <ShoppingBagIcon className="icon" />
            </Link>
          </div>
        </nav>
        <div className="promo-message">
          <h5>{this.state.promotion}</h5>
          <h6>{this.state.endDate}</h6>
        </div>
      </header>
    );
  }
}
