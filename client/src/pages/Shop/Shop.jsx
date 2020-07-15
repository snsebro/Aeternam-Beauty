import React, { useState, useEffect } from "react";
import api from "../../services/apiconfig";
import { Products } from "../../components/Products/Products";
import Pagination from "../../components/pagination";

import "./Shop.css";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  // const products = props.products
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

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

  return (
    <>
      <div className="shop-nav">
        <h1 className="shop-title">SHOP ALL</h1>
        <select>
          <option value="">SHOP ALL</option>
          <option value="">NEW IN</option>
          <option value="">SALE</option>
          <option value="">PRICE $ - $$$</option>
          <option value="">PRICE $$$- $</option>
        </select>
      </div>
      <div className="shop">
        <Products products={currentProducts} loading={loading} />
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default Shop;
