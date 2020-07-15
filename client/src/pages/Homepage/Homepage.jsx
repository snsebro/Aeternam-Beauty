import React from "react";
import "./Homepage.css";
import HeroCTA from "../../components/HeroCTA/HeroCTA";

export default function Homepage() {
  return (
    <>
      <div className="content">
        <HeroCTA className="indigo"
          image1={"https://i.ibb.co/yfkcsBV/hero-image-left-2x.jpg"}
          image2={"https://i.ibb.co/8bc0fmw/hero-image-right-2x.jpg"}
        />
      </div>
      <div className="product-text">
        <h2>NEW IN!</h2>
      </div>
      <div className="content">
      <HeroCTA className="icy"
          image1={"https://i.ibb.co/k9wBNBK/icy-image-left-2x.jpg"}
          image2={"https://i.ibb.co/2jLPPSz/icy-image-right-2x.jpg"}
        />
      </div>
      <div className="product-text">
        <h2>SALE!</h2>
      </div>
      <div className="content">
      <HeroCTA className="color-pop"
          image1={"https://i.ibb.co/VQrgC7c/color-pop-image-left-2x.jpg"}
          image2={"https://i.ibb.co/7jcY049/color-pop-image-right-2x.jpg"}
        />
      </div>
    </>
  );
}
