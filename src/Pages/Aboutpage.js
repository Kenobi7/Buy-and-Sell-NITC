import React, { Fragment, useContext } from "react";
import Create from "../Components/Create/Create";
import About from "../Components/About/About";
import { AuthContext } from "../contextStore/AuthContext";
import Header from "../Components/Header/Header";
import AllPosts from '../Components/ViewMoreAllPosts/AllPosts';
function about() {
    return (
        <div>
         <Header/>
         <About/>
        </div>
    )
}

export default about