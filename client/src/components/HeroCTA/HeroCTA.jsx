import React from "react";
import "./HeroCTA.css";

//Make the CTA headings props passed down from homepage

export default function HeroCTA(props) {
  return (
    <div className="heroCTA">
      <div
        className="left"
        style={{
          backgroundImage: `url(${props.image1})`,
        }}
      ></div>
      <div
        className="right"
        style={{
          backgroundImage: `url(${props.image2})`,
        }}
      >
        <div className="CTA">
          <h6>NEW!</h6>
          <h3>INDIGO DREAMS</h3> 
          <h5>EYE SHADOW</h5>
          <h5>BOLD COLOR. MATTE FINISH</h5>
          <h5>COLOR STAY APPLICATION</h5>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}
