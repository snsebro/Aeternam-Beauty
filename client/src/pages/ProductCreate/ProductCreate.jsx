import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import {createProduct} from "../../services/products"
import "./ProductCreate.css";

class ProductCreate extends Component {
  state = {
    name: "",
    on_sale: false,
    new_in: true,
    product_shot: "",
    alt_shot: "",
    product_details: "",
    price: "",
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    const{handleProductCreate, history} = this.props
    return (
      <div className="create-form">
        <h1>ADD INVENTORY ITEM</h1>
        <form className="form" onSubmit={(e) => {
          e.preventDefault()
          handleProductCreate(this.state)
          history.push('/shop')
        }}>
          <div className="form-left">
            <input
              type="text"
              placeholder="NAME"
              name="name"
              onChange={this.handleInputChange}
            ></input>
            <select name="on_sale" onChange={this.handleInputChange}>
              <option>ON SALE?</option>
              <option ngValue={true}>true</option>
              <option ngValue={false}>false</option>
            </select>
            <select name="new_in" onChange={this.handleInputChange}>
              <option>NEW IN?</option>
              <option value="true">YES</option>
              <option value="false">NO</option>
            </select >
            <input
              type="text"
              placeholder="PRICE"
              name="price"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-right">
            <input
              type="text"
              placeholder="PRODUCT SHOT URL"
              name="product_shot"
              onChange={this.handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="ALTERNATE SHOT URL"
              name="alt_shot"
              onChange={this.handleInputChange}
            ></input>
            <textarea
              name="product_details"
              id=""
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <button type="submit">ADD ITEM</button>
        </form>
      </div>
    );
  }
}

export default withRouter (ProductCreate)