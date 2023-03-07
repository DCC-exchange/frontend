import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style/login.css";
import arrow from "../images/arrow back dcc.svg";
import eye from "../images/eye dcc.svg";

import { useLOgin } from "../hooks/useLogin";
// import { Message } from "emailjs";

export default function Login() {
  const { login, isLoading, error } = useLOgin();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  

  // const History = (e) => {
  //   e.preventDefault();
  //   window.history.back();
  // };

  const HandleSubmit = async(e) => {
    e.preventDefault();
    await login(email, password);
  };



  return (
    <div className="login-display">
      <div className="login-page-display"></div>
      <div className="login-display-cover">
        <div className="login-display-inner">
          <div className="login-display-top">
            <div className="login-top">
                 <NavLink to="/">
                      <img src={arrow} alt="arrow" width={"10px"} />
                  </NavLink>
            </div>
            <h1>Welcome Back</h1>
          </div>

          <div className="login-top-flex">
            <div className="login-top-flex1">
              <NavLink to="/login">
                <h3>Log in</h3>
              </NavLink>
            </div>
            <div className="login-top-flex2">
              <NavLink to="/signup">
                <h3>Sign up Now</h3>
              </NavLink>
            </div>
          </div>

          <form onSubmit={HandleSubmit} >
            <div className="login-main">
              <div className="login-main-email">
                <label>Email</label>
                <input
              type="text"
              placeholder="Email"  onChange={(e) => setemail(e.target.value)} value={email} required />
              </div>
              <div className="login-main-password">
                <label>Password</label>
                <input
              type="text"
              placeholder="password"  onChange={(e) => setPassword(e.target.value)} value={password} required />
              <div className="login-main-password_img">
                <img src={eye} alt="eye" width={"20px"} />
              </div>
              </div>
            </div>

            <div className="login-main-btn">
              {
                 isLoading &&   <button disabled={isLoading}>Loading...</button>
              }
              {
                 !isLoading &&   <button type="submit" disabled={isLoading}>Login</button>
              }
            
            </div>
            <div className="forgot_password">
            <Link to="/forgotpassword">
              <h3>Forgot password?</h3>
            </Link>
          </div>
          </form>
          {error && <div className="error-Message">{error}</div>}
        </div>
        
      </div>
      <div className="login-page-display2"></div>
    </div>
  );
}
