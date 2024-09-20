import React, { Fragment, useState, useContext } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";
import Header from "../Header/Header";


function About() {
    let [category, setCategory] = useState();
    
    return (
      <div className="bannerParentDiv">
        <div className="bannerChildDiv">
          <div className="menuBar">
            <div className="categoryMenu">
              
            </div>
            
          </div>
          <div className="banner">
            <img src="../../../Images/new.jpeg" alt="" />
          </div>
        </div>
     
      </div>
    );
  }
  
  export default About;