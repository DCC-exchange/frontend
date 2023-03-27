import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../images/dcc logo.svg";
import logo1 from "../images/wallet profile.svg";
import wallet2 from "../images/Wallet (1).svg";
import history from "../images/history.svg";
import check from "../images/fact check.svg";
import person from "../images/person add.svg";
import construction from "../images/construction.svg";
import leaderboard from "../images/leaderboard.svg";
import security from "../images/security.svg";
import Settings from "../images/Settings.svg";
import notify from "../images/notify dcc.svg";

export default function TopNav() {
  const [displayPro, setDisplayPro] = useState(false);
  const [displayAsset, setDisplayAsset] = useState(false);

  function disPro() {
    setDisplayPro(true);
  }

  function hidePro() {
    setDisplayPro(false);
  }
  function disAsset() {
    setDisplayAsset(true);
  }

  function hideAsset() {
    setDisplayAsset(false);
  }

  let notification = [4, 4, 3, 4, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3];

  return (
    <div className="desktop-cover">
      <div className="desktop-home-top-flex">
        <div className="desktop-home-top-flex1">
          <div className="desktop-home-top-flex1-left">
            <NavLink to="/">
              <img src={logo} alt="logo" width={"40px"} />
              <h3>DCC</h3>
            </NavLink>
          </div>
          <div className="desktop-home-top-flex2">
            <NavLink to="/">
              <div className="active1">
                <h3>Home</h3>
              </div>
            </NavLink>
            <NavLink to="/market">
              <div className="active1">
                <h3>Market</h3>
              </div>
            </NavLink>
            <NavLink to="/spot">
              <div className="active1">
                <h3>Spot</h3>
              </div>
            </NavLink>
            <NavLink to="/login">
              <div className="active1">
                <h3>Futures</h3>
              </div>
            </NavLink>
            <NavLink to="/login">
              <div
                onMouseEnter={disAsset}
                onMouseLeave={hideAsset}
                id="arrow-cover"
                className="active1"
              >
                <h3>Assets</h3>
                <h1>&#10095;</h1>
              </div>
            </NavLink>
          </div>

          {displayAsset && (
            <div
              onMouseEnter={disAsset}
              onMouseLeave={hideAsset}
              className="desktop-home-top-asset"
            >
              <NavLink to="/asset">
                <div className="menu-Display-top-page-flex-first">
                  <div className="menu-Display-top-page-flex-first1">
                    <h3>My Assets</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/AssetTransaction">
                <div className="menu-Display-top-page-flex-second">
                  <div className="menu-Display-top-page-flex-second1">
                    <h3>Transactions</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/transfer">
                <div className="menu-Display-top-page-flex-second">
                  <div className="menu-Display-top-page-flex-second1">
                    <h3>Transfer</h3>
                  </div>
                </div>
              </NavLink>
            </div>
          )}
        </div>
        <div className="desktop-home-top-flex3">
          <NavLink onMouseEnter={disPro} onMouseLeave={hidePro}>
            <img src={logo1} alt="logo" width={"30px"} />
          </NavLink>
          <NavLink to="/login">
            <div className="notification-count">
              <img src={notify} alt="Profile logo" />
              <div className="notification-count-num">
                <h3>{notification.length}</h3>
              </div>
            </div>
          </NavLink>
        </div>

        {displayPro && (
          <div
            onMouseEnter={disPro}
            onMouseLeave={hidePro}
            className="desktop-home-top-drop"
          >
            <div className="menu-Display-top-page">
              <NavLink to="/wallet">
                <div className="menu-Display-top-page-flex-first">
                  <div className="menu-Display-top-page-flex-first1">
                    <img src={wallet2} alt="gift" width={"20px"} />
                    <h3>Wallet</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/FundHistory">
                <div className="menu-Display-top-page-flex-second">
                  <div className="menu-Display-top-page-flex-second1">
                    <img src={history} alt="gift" width={"15px"} />
                    <h3>Funds History</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/SpotHistory">
                <div className="menu-Display-top-page-flex-third">
                  <div className="menu-Display-top-page-flex-third1">
                    <img src={check} alt="gift" width={"20px"} />
                    <h3>Spot History</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Referrals">
                <div className="menu-Display-top-page-flex-fifth">
                  <div className="menu-Display-top-page-flex-fifth1">
                    <img src={person} alt="gift" width={"20px"} />
                    <h3>My Referrals</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/MasterSettings">
                <div className="menu-Display-top-page-flex-sixth">
                  <div className="menu-Display-top-page-flex-sixth1">
                    <img src={construction} alt="gift" width={"20px"} />
                    <h3>Master Settings</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/CopyTrading">
                <div className="menu-Display-top-page-flex-seventh">
                  <div className="menu-Display-top-page-flex-seventh1">
                    <img src={leaderboard} alt="gift" width={"20px"} />
                    <h3>My Copy Trades</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Security">
                <div className="menu-Display-top-page-flex-eight">
                  <div className="menu-Display-top-page-flex-eight1">
                    <img src={security} alt="gift" width={"20px"} />
                    <h3>Security</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/CopyTrading">
                <div className="menu-Display-top-page-flex-tenth">
                  <div className="menu-Display-top-page-flex-tenth1">
                    <img src={Settings} alt="gift" width={"20px"} />
                    <h3>Settings</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/logout">
                <div className="menu-Display-top-page-flex-tenth">
                  <div className="menu-Display-top-page-flex-tenth1">
                    <h3>Log Out</h3>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
