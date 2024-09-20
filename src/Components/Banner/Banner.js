import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          
          
        </div>
        <div className="banner">
          <img src="../../../Images/download.jpg" alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default Banner;
