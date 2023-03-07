import React from "react";
import "./style/welcome.css";
import { NavLink } from "react-router-dom";
import wallet from "../images/wallet purse.svg";

export default function Welcome() {

  return (
    <div className="welcome-display">
      <div className="welcome-page-display">
        <img  src={wallet} alt="wallet" width={"220px"} />
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
        <NavLink to="/index">
          <button>Get Started</button>
        </NavLink>
      </div>
    </div>
  );
}
