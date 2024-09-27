import React from "react";
import "./signup.css"
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="auth-container">
    <div className="auth-box">
      <div className="auth-left">
      <h1>Welcome Back!</h1>
        <h4 className="text-center"> Unlock your coding potential. Start your DSA journey today.</h4>
        <p>Don't have an Account 👇</p>
        <button className="btn btn-light sign-in-btn"><NavLink to='/signup'>SIGN Up</NavLink></button>
      </div>
      <div className="auth-right">
        <h1>Login</h1>
        <p>Please login with your College ID to continue</p>
        <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="College ID"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
      </div>
    </div>
  </div>



         
  );
};

export default LoginPage;
