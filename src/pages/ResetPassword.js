import React from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import "./style/login.css";
import arrow from "../images/arrow back dcc.svg";
import eye from "../images/eye dcc.svg";

import { useLOgin } from "../hooks/useLogin";
// import { Message } from "emailjs";

export default function ResetPassword() {
    const [password, setpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const { login, isLoading, error} = useLOgin();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await login(confirmpassword, password);
      setpassword("");
      setConfirmpassword("");
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
          </div>
          <form onSubmit={handleSubmit} >
            <div className="user_text">
                <h3>Reset Your password</h3>
            </div>
            <div className="login-main">
              <div className="login-main-email">
                <label>Set Password</label>
                <input
              type="Set Password"
              placeholder="Set Password"  
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
              />
              <div className="eye_image">
                <img src={eye} alt="eye" width={"20px"} />              
              </div>
              </div>
              <div className="login-main-password">
                <label>Confirm Password</label>
                <input
              type="Confirm Password"
              placeholder="Confirm Password"  
              onChange={(e) => setConfirmpassword(e.target.value)}
              value={confirmpassword}
              required />              
              </div>
              <div className="eye_image_2">
                <img src={eye} alt="eye" width={"20px"} />              
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
          </form>
          {error && <div className="error-Message">{error}</div>}
        </div>
        
      </div>
      <div className="login-page-display2"></div>
    </div>
  );
}
