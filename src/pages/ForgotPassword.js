import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/ForgotPassword.css";
import { useAuthContext } from "../hooks/useAuthContext";
import arrow from "../images/arrow back dcc.svg";


// import { Message } from "emailjs";

export default function ForgotPassword() {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
  
    const { dispatch } = useAuthContext()
  
  
    const handleSubmit = ( async (email)=>{
      setIsLoading(true)
      setError(null)
  
      const response = await fetch("https://localhost:4500/api/users/forgot-password", {
          method: "POST",
          body: JSON.stringify({email }),
          headers: {
              "Content-type" : "application/json"
          }
      })
  
      const json = await response.json()
      if(!response.ok){
          setIsLoading(false)
          setError(json.error)
      }
      if(response.ok){
          // Save user to localStorage
          localStorage.setItem('user', JSON.stringify(json))
          // Update the auth context
          dispatch({ type: "LOGIN" , payload: json})
          window.location.href = "/reset-password"
      }
      return { isLoading, error}
  
  
  })



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
            <h3>Forgot password?</h3>
          </div>
            <div className="login-main">
              <div className="login-main-email">
                <label>Enter your Email</label>
                <input
              type="email"
              placeholder="email"
                // value={email} 
                required />
              </div>
            </div>
            <div className="login-main-btn">
                <button type="submit">Enter</button>         
            </div>
          </form>
          {error && <div className="error-Message">{error}</div>}
        </div>
        
      </div>
      <div className="login-page-display2"></div>
    </div>
  );
}
