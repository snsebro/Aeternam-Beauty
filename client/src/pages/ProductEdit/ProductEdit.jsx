import "./ProductEdit.css";
import { getProduct, updateProduct, deleteProduct } from "../../services/products";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";

class ProductDetail extends Component {
  state = {
    product: {
      name: " ",
      product_shot: " ",
      alt_shot: " ",
      product_details: " ",
      price: " ",
    },
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const product = await getProduct(id);
    this.setState({ product });
  };

  handleProductEdit = async (productData) => {
    const id = this.props.match.params.id
    const editedProduct = await updateProduct(id, productData);
    this.setState({
      product: editedProduct
    });
  };

  handleProductDelete = async () => {
    const id = this.props.match.params.id
    await deleteProduct(id)
    this.props.history.push("/shop")
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: { ...prevState.product, [name]: value },
    }));
  };

  render() {
    return (
      this.state.product && (
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleProductEdit(this.state.product)
          this.props.history.push(`/products/${this.props.match.params.id}/edit`)
        }
        }>
          <div className="product-detail">
            <div className="product-shot">
              <img src={this.state.product.product_shot} />
              <input
                name="product_shot"
                type="text"
                value={this.state.product.product_shot}
                onChange={this.handleInputChange}
              ></input>
              <input
                name="alt_shot"
                type="text"
                value={this.state.product.alt_shot}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="product-info">
              <input
                name="name"
                type="text"
                value={this.state.product.name.toUpperCase()}
                onChange={this.handleInputChange}
              ></input>
              <input
                name="price"
                type="text"
                value={this.state.product.price.toUpperCase()}
                onChange={this.handleInputChange}
              ></input>
              <button type="submit">EDIT PRODUCT</button>
              <h3>DESCRIPTION:</h3>
              <p className="description">
                <input
                  name="product_details"
                  type="text"
                  value={this.state.product.product_details}
                  onChange={this.handleInputChange}
                ></input>
              </p>
            </div>
            <button onClick={this.handleProductDelete}>DELETE PRODUCT</button>
          </div>
          <div className="review-section">
            <h1>REVIEWS</h1>
            {/* <Reviews
              currentUser={this.state.currentUser}
              reviews={this.state.product.reviews}
            /> */}
          </div>
        </form>
      )
    );
  }
}

export default withRouter(ProductDetail);
