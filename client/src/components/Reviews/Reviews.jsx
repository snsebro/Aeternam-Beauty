import React, { useState } from "react";
import Pagination from "../../components/pagination";
import { ReactComponent as FiveStars } from "../../frontend_assets/5-stars-white.svg";

import "./Reviews.css";

const Reviews = (props) => {
  const reviews = props.reviews;
  // const [reviews, setReviews] = useState([]);
  // const products = props.products
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(4);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     const res = await api.get("/products");
  //     setProducts(res.data);
  //     setLoading(false);
  //   };

  //   fetchProducts();
  // }, []);

  //GET current products
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="review">
        {/* <Products products={currentReviews} loading={loading} /> */}
        {reviews.map((review) => (
          <div className="review-content"> 
            <p>{review.content}</p>
            <FiveStars />
          </div>
        ))}
      </div>
      <Pagination
        productsPerPage={reviewsPerPage}
        totalProducts={reviews.length}
        paginate={paginate}
      />
    </>
  );
};

export default Reviews;
