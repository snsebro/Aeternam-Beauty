import React, { useState, useEffect } from "react";
import api from "../../services/apiconfig";
import { Products } from "../../components/Products/Products";
import Pagination from "../../components/pagination";
import { AZ, ZA, lowestFirst, highestFirst } from "../../components/sort";

import "./Shop.css";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [selectValue, setSelectValue] = useState('Featured');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await api.get("/products");
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  //GET current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastProduct);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const aggregateStars = (reviews) => {
    let sum = 0;
    let length = reviews.length;

    if (reviews.length <= 0) return 1;
    reviews.forEach((review) => {
      sum += parseInt(review.stars);
    });

    let average = sum / length;
    return average;
  };

  const handleSortChange = (event) => {
    setSelectValue({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    // const { products } = this.state;
    switch (input) {
      case "name-ascending":
        setProducts({
          products: AZ(products),
        });
        break;
      case "name-descending":
        setProducts({
          products: ZA(products),
        });
        break;
      case "price-ascending":
        setProducts({
          products: lowestFirst(products),
        });
        break;
      case "price-descending":
        setProducts({
          products: highestFirst(products),
        });
        break;
      default:
        break;
    }
  };

  return (
    products && (
      <>
        {console.log(currentProducts)}
        <div className="shop">
          <div className="shop-nav">
            <h1 className="shop-title">SHOP ALL</h1>
            <form
              className="sort-container"
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                <select value={props.selectValue}>
                  <option value="shop-all">SHOP ALL</option>
                  <option value="new-in">NEW IN</option>
                  <option value="sale">SALE</option>
                  <option value="price-ascending">PRICE $ - $$$</option>
                  <option value="price-descending">PRICE $$$- $</option>
                </select>
              </label>
            </form>
          </div>

          <Products
            currentUser={props.currentUser}
            aggregateStars={aggregateStars}
            products={currentProducts}
            loading={loading}
            // altImage={altImage}
          />
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </>
    )
  );
};

export default Shop;
