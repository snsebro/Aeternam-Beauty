import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-links">
          <a href="/past-orders"><h4>PAST ORDERS</h4></a>
          <a href="/reviews"><h4>VIEW REVIEWS</h4></a>
          <a href="/" onClick={this.props.handleLogout}><h4>LOGOUT</h4></a>
        </div>
        <div className="images">
          <img src="../../frontend_assets/profile-image-blue.png" alt="model"/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>
    );
  }
}
