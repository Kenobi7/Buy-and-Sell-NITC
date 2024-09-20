import React, { useContext,useState } from "react";
import { useHistory } from "react-router";
import { AllPostContext } from "../../contextStore/AllPostContext";
import { PostContext } from "../../contextStore/PostContext";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import SearchIcon from "../../assets/SearchIcon"
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";
function Header() {
  const{allPost}=useContext(AllPostContext)
  const{setPostContent}=useContext(PostContext)
  const history = useHistory();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleSelectedSearch=(value)=>{
       setPostContent(value)
       history.push("/view")

  }
  const handleEmptyClick=()=>{
     alert("No items found.., please search by product name");
  }
  const { user } = useContext(AuthContext);
  
  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        history.push("/login");
      });
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <h3>Buy And Sell @ NITC</h3>
         
        </div>
        
        <div className="productSearch">
          <Search />
        </div>
        
       
        <div className="loginPage">
          {user ? (
           user.displayName
          ) : (
            <Link to="/login">
              <span>Login</span>
              
            </Link>
          )}
          <hr />
        </div>
       
        
        <Link to="/create">
          {" "}
    
          <button type="button" class="btn btn-success">Sell Product</button>
        </Link>



        
        
        {user && (
          <span onClick={logoutHandler} className="logout-span">
            
            <button type="button" class="btn btn-danger">Logout</button>
          </span>
        )}

         <Link to="/about">
          {" "}
     
          <button type="button" class="btn btn-warning">About</button>
        </Link>

        
      </div>
    </div>
  );
}

export default Header;
