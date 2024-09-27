import React from "react";
import "./signup.css"
import { NavLink } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h1>Welcome</h1>
          <h4 className="text-center">Your path to coding mastery begins here. Register and rise!</h4>
          <p>To keep connected with us please login </p>
          <button className="btn btn-light sign-in-btn"><NavLink to='/login'>SIGN IN</NavLink></button>
        </div>
        <div className="auth-right">
          <h1>Create Account</h1>

          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Unique Username" />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="College email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              </div>
              <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Mobile NO."
              />
            </div>
            <button  className="btn btn-success">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default  SignUp;
