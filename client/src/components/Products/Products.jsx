import React from "react";
import { ReactComponent as FiveStars } from "../../frontend_assets/5-stars.svg";

import "./Products.css";
import { Link } from "react-router-dom";

export const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      {products.map((product) => (
        <div className="product-div" key={product.id}>
          <img className="product-img" src={product.product_shot} />
          <Link to={`/products/${product.id}`}>
            <h4>{product.name.toUpperCase()}</h4>
          </Link>
          <p>{product.price}</p>
          <FiveStars />
        </div>
      ))}
    </>
  );
};
