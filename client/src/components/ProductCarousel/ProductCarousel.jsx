import React from 'react'
import { ReactComponent as BackArrow } from "../../frontend_assets/back-arrow.svg"
import { ReactComponent as ForwardArrow } from "../../frontend_assets/forward-arrow.svg"

import "./ProductCarousel.css"
import { Link } from 'react-router-dom'

export default function ProductCarousel(props) {
  return (
    <div className="product-carousel">
      <div className="prev">
        <BackArrow className="arrow"/>
      </div>
      <div className="products">
        {props.products.map((product, index) => {
          if (index > 3) return null
          return (
          <div className="product">
            <img src={product.product_shot} alt="product" />
            <Link to={`/products/${product.id}#aeternam`}><p>{product.name.toUpperCase()}</p></Link>
            <p>{product.price}</p>
          </div>)
        })}
      </div>
      <div className="next">
        <ForwardArrow className="arrow"/>
      </div>
    </div>
  )
}
