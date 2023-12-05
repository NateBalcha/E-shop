import React from "react";

import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const userName = "username";
  const password = "12345";

  const checkCridentials = () => {
    const inputUserName = document.getElementById("userName").value;
    const inputPassword = document.getElementById("password").value;
    let status = false;

    if (inputUserName === userName && inputPassword === password) {
      alert("you are in");
      status = true;
    }
    return status;
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder="User Name"
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button onClick={checkCridentials}>Log in</button>
        <p className="loginSignup-login">
          Already have an account <span>Login here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
