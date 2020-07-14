import React, { Component } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as ShoppingBagIcon } from "../../frontend_assets/shopping-bag-icon.svg"
import { ReactComponent as SearchIcon } from "../../frontend_assets/search-icon.svg"
import {ReactComponent as ProfileIcon} from "../../frontend_assets/profile-icon.svg"
import "./Header.css"

export default class Header extends Component {
  state = {
    promotion: 'SUMMER SALE! SAVE 15% OFF YOUR NEXT ORDER WITH THE CODE ‘GWORLS’ AT CHECKOUT',
    endDate: 'ENDS 7/23 AT 11:59 P.M. EST',
  }

  render() {
    
    return (
      <header>
        <div className="aeternam">
          <h1>AETERNAM BEAUTY</h1>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li><Link>SHOP</Link></li>
              <li><Link>SALE</Link></li>
              <li><Link>COLLECTIONS</Link></li>
              <li><Link>LOOKS</Link></li>
              <li><Link>INSPO</Link></li>
            </ul>
          </div>
          <div className="nav-icons">
            <Link><ProfileIcon className="icon"/></Link>
            <Link><SearchIcon className="icon"/></Link>
            <Link><ShoppingBagIcon className="icon"/></Link>
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
