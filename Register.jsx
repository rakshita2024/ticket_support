import React from "react";
import PhotoIcon from "../images/picture.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Family Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="diplay name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file" className="label">
            <img src={PhotoIcon} alt="images" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
