import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Pagination from "../../components/pagination";
import StarRatings from "react-star-ratings";
import { createReview } from "../../services/reviews";

import "./Reviews.css";

const Reviews = (props) => {
  const reviews = props.reviews;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(4);
  const [addReview, setAddReview] = useState(false);
  const [review, updateReview] = useState({
    stars: "",
    content: "",
    user_id: "",
    product_id: "",
  });

  //GET current products
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const newReview = () => {
    setAddReview(true);
    updateReview({
      ...review,
      user_id: props.currentUser.id,
      product_id: props.currentProduct.id,
    });
  };

  return (
    <>
      <div className="review">
        {/* <Products products={currentReviews} loading={loading} /> */}
        {currentReviews.map((review) => (
          <div className="review-content">
            <p>{review.content}</p>
            <StarRatings
              numberOfStars={5}
              starRatedColor="white"
              rating={review.stars}
              name="rating"
              isAggregateRating={true}
              starDimension="35px"
              starSpacing="5px"
              starEmptyColor="#262626"
            />
          </div>
        ))}
      </div>
      <Pagination
        productsPerPage={reviewsPerPage}
        totalProducts={reviews.length}
        paginate={paginate}
      />
      {addReview && (
        <form
          className="review-form"
          onSubmit={(e) => {
            createReview(review);
            console.log(review);
            props.history.push(`/products/${props.currentProduct.id}`);
          }}
        >
          <textarea
            name="review-content"
            className="review-input review-text"
            value={review.content}
            onChange={(e) =>
              updateReview({ ...review, content: e.target.value })
            }
            cols="30"
            width="10"
          ></textarea>
          <select
            className="review-input"
            name="stars"
            onChange={(e) => updateReview({ ...review, stars: e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="review-input" type="submit">
            ADD REVIEW
          </button>
        </form>
      )}
      {props.currentUser && !addReview ? (
        <button className="new-review-button" onClick={newReview}>
          NEW REVIEW
        </button>
      ) : null}
    </>
  );
};

export default withRouter(Reviews);
