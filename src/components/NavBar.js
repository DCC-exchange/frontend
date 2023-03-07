import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import Homenav from "../images/homedcc.svg";
import market from "../images/marketdcc.svg";
import futures from "../images/logodcc.svg";
import spot from "../images/spotdcc.svg";
import wallet from "../images/walletdcc.svg";
import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="Navbar-down">
        <div className="NavBar-display-main-flex">
        <NavLink to="/">
            <div className="NavBar-display-main-flex1">
                <img className="img" src={Homenav} alt="copy logo" />
              <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink to="/market">
        <div className="NavBar-display-main-flex1">
          <img src={market} alt="copy logo"  />
          <h3>Market</h3>
        </div>
        </NavLink>
        <NavLink to="/features">
        <div className="NavBar-display-main-flex3">
          <img src={futures} alt="copy logo" />
        </div>
        </NavLink>

        <NavLink to="/Spot">
        <div className="NavBar-display-main-flex1">
          <img src={spot} alt="copy logo"  />
          <h3>Spot</h3>
        </div>
        </NavLink>

        <NavLink to="/login">
        <div className="NavBar-display-main-flex1">
          <img src={wallet} alt="copy logo" />
          <h3>Wallet</h3>
        </div>
        </NavLink>
      </div>
    </div>
    </>
  );
}
