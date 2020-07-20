import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Profile.css";

export default class Profile extends Component {
  render = () => {
    {
    return ( this.props.currentUser && (
      <div className="profile-container">
        {console.log(this.props.currentUser.name)}
        <h1>{`Hi, ${this.props.currentUser.name}`}</h1>
        <div className="profile">
          <div className="profile-links">
            {this.props.currentUser.is_admin ? <Link to="/shop"><h4>VIEW INVENTORY</h4></Link> : <Link to="/past-orders"><h4>PAST ORDERS</h4></Link>}
            {this.props.currentUser.is_admin ? <Link to="/add-product"><h4>ADD INVENTORY</h4></Link> : <Link to="/reviews"><h4>VIEW REVIEWS</h4></Link>}
            {<Link to="/" onClick={this.props.handleLogout}><h4>LOGOUT</h4></Link>}
          </div>
          <div className="images">
            <img src="https://i.ibb.co/K5s1L9j/profile-image-blue.png" />
            <img src="https://i.ibb.co/qRx7XPC/profile-image-green.png" alt="" />
            <img src="https://i.ibb.co/99wXv55/profile-image-yellow.png" alt="" />
          </div>
        </div>
      </div >)
    )
    };
  }
}
