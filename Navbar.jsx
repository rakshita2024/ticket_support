import React from "react";
import logo from "../images/picture.png";
const Navbar = () => {
  return (
    <div className="navbar">
       <div className="icons">
         
           <img src = {logo} alt="" /> 
           <h1>DashBoard</h1> 
      
        <h1>Tickets</h1> 
      <h1>Knowledge</h1> 
       <h1>About Us</h1> 
       </div>
    </div>
  );
};

export default Navbar;
