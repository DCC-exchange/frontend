import React, { useState } from "react";
import "./style/welcome.css";
import dccLogo from "../images/dcc logo.svg";
import wallet from "../images/wallet purse.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, useNavigate } from "react-router";

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const data = window.localStorage.getItem("MY_APP_STATE");

  // redirects to home if user is already signed in
  if (user || data === "false") {
    return <Navigate replace to="/index" />;
  }
  // displays preloader once the get started button is clicked
  if (loading) {
    return (
      <div className="mobile-preloader">
        <div className="mobile-loader">
          <img src={dccLogo} alt="Profile logo" />
        </div>
      </div>
    );
  }
  return (
    <div className="welcome-display">
      <div className="welcome-page-display">
        <img src={wallet} alt="wallet" width={"220px"} />
      </div>
      <div className="welcome-display-footer">
        <h1>
          Manage <br /> Your Wallet
        </h1>
        <div className="welcome-display-footer2">
          <h3>
            Manage your app with DCC <br /> Exchange.
          </h3>
          <h3>
            {" "}
            With our app it’s easy and <br /> secured.
          </h3>
        </div>
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(function () {
              setLoading(false);
              navigate("index");
            }, 5000);
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
