import "./ProductDetail.css";
import api from "../../services/apiconfig";
import { getProduct } from "../../services/products";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";

class ProductDetail extends Component {
  state = {
    product: null,
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const product = await getProduct(id);
    this.setState({ product });
  };

  render() {
    return (
      this.state.product && (
        <>
          <div className="product-detail">
            <div className="product-shot">
              <img src={this.state.product.product_shot} />
            </div>
            <div className="product-info">
              <h1>{this.state.product.name.toUpperCase()}</h1>
              <h2>$ {this.state.product.price}</h2>
              <button type="submit">ADD TO CART</button>
              <h3>DESCRIPTION:</h3>
              <p className="description">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sint impedit quasi, earum possimus quam necessitatibus alias id
                hic beatae, provident quos dolores iure debitis quia, neque
                officia ducimus reprehenderit.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda odio vel asperiores cupiditate officia perferendis,
                nam iusto reiciendis ipsa quam labore culpa velit eligendi nobis
                laborum? Odit laborum at pariatur. */}
                {this.state.product.product_details}
              </p>
            </div>
            </div>
          <div className="review-section">
            <h1>REVIEWS</h1>
            <Reviews currentUser={this.props.currentUser} currentProduct={this.state.product} reviews={this.state.product.reviews}/>
            
          </div>
        </>
      )
    );
  }
}

export default withRouter(ProductDetail);
