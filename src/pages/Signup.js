import React from "react";
import { NavLink } from "react-router-dom";
import "./style/signup.css";
import arrow from "../images/arrow back dcc.svg";
import eye from "../images/eye dcc.svg";
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import ProfileSignUp from "../components/ProfileSignUp";




export default function Signup() {
  const { user } = useAuthContext();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup( email, password);
  };








  return (
    <>
    {user && <ProfileSignUp />}

    {!user && (
    <div className="signup-display">
      <div className="signup-page-display"></div>
      <div className="signup-display-cover">
        <div className="signup-display-inner">
          <div className="signup-display-top">
            <div className="signup-top">
                <NavLink to="/">
                    <img src={arrow} alt="arrow" width={"10px"} />
                </NavLink>
            </div>
            <h1>Create An Account</h1>
          </div>

          <div className="signup-top-flex">
            <div className="signup-top-flex1">
              <NavLink to="/login">
                <h3>Log in</h3>
              </NavLink>
            </div>
            <div className="signup-top-flex2">
              <NavLink to="/signup">
                <h3>Sign up Now</h3>
              </NavLink>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-main">
              <div className="signup-main-email">
                <label>Email</label>
                <input     type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required />
              </div>
              <div className="signup-main-password">
                <label>Create Password</label>
                <input   type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required />
                <img src={eye} alt="eye" width={"20px"} />
              </div>
            </div>

            <div className="signup-main-btn">
              <button disabled={isLoading} type="submit">Sign up</button>
            </div>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>

      <div className="signup-page-display2"></div>
    </div>
    )}
   </>
  );
}
