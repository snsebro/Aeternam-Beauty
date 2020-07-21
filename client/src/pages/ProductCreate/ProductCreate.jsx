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
              className="txt-input"
            ></input>
            <select name="on_sale" onChange={this.handleInputChange} className="txt-input">
              <option>ON SALE?</option>
              <option ngValue={true}>true</option>
              <option ngValue={false}>false</option>
            </select>
            <select name="new_in" onChange={this.handleInputChange} className="txt-input">
              <option>NEW IN?</option>
              <option value="true">YES</option>
              <option value="false">NO</option>
            </select >
            <input
              type="number"
              placeholder="PRICE"
              name="price"
              onChange={this.handleInputChange}
              className="txt-input"
            ></input>
          </div>
          <div className="form-right">
            <input
              type="text"
              placeholder="PRODUCT SHOT URL"
              name="product_shot"
              onChange={this.handleInputChange}
              className="txt-input"
            ></input>
            <input
              type="text"
              placeholder="ALTERNATE SHOT URL"
              name="alt_shot"
              onChange={this.handleInputChange}
              className="txt-input"
            ></input>
            <textarea
              name="product_details"
              id=""
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
              placeholder="PRODUCT DESCRIPTION"
              className="txt-area"
            ></textarea>
          </div>
        </form>
          <button type="submit" className="add-button">ADD ITEM</button>
      </div>
    );
  }
}

export default withRouter (ProductCreate)