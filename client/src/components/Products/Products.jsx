import React from "react";
import StarRatings from "react-star-ratings"
import { ReactComponent as FiveStars } from "../../frontend_assets/5-stars.svg";

import "./Products.css";
import { Link } from "react-router-dom";

export const Products = ({ products, loading, aggregateStars, currentUser}) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      {products && products.map(product => {
        const starAggregate = (aggregateStars(product.reviews))
        return (
        <div className="product-div" key={product.id}>
          <img className="product-img" src={product.product_shot} />
          <Link to={currentUser.is_admin ? `/products/${product.id}/edit` : `/products/${product.id}`}>
            <h4>{product.name.toUpperCase()}</h4>
          </Link>
          <p>{product.price}</p>
          {console.log(product.reviews)}
          <StarRatings
            numberOfStars={5}
            starRatedColor="black"
            rating={starAggregate ? starAggregate : 1}
            name='rating'
            isAggregateRating={true}
            starDimension="35px"
            starSpacing="5px"
            starEmptyColor="rgb(240,240,240)"
          />
        </div>)
      })}
    </>
  );
};
