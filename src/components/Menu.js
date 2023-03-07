import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/menu.css";
import arrow from "../images/arrow back dcc.svg";
import notify from "../images/notify dcc.svg";
import contact from "../images/conatct dcc.svg";
import gift from "../images/card giftcard.svg";
import forward from "../images/forward arrow.svg";
import history from "../images/history.svg";
import check from "../images/fact check.svg";
import library from "../images/library books.svg";
import person from "../images/person add.svg";
import construction from "../images/construction.svg";
import leaderboard from "../images/leaderboard.svg";
import security from "../images/security.svg";
import help from "../images/help outline.svg";
import Settings from "../images/Settings.svg";

export default function Menu() {
  const History = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="menu-Display">
      <div className="menu-Display-cover">
        <div className="menu-page-display"></div>
        <div className="menu-Display-top">
          <div className="menu-top">
            <img onClick={History} src={arrow} alt="arrow" width={"10px"} />
          </div>
          <div className="menu-top-flex2">
            <img src={contact} alt="contact" />
            <img src={notify} alt="notify" />
          </div>
        </div>

        <div className="menu-Display-top-main">
          <div className="menu-Display-top-text">
            <h3>
              Welcome to <span>DCC Exchange</span>
            </h3>
          </div>
          <div className="menu-Display-login">
            <button className="menu-Display-login-btn1">
              <NavLink to="/login">Log In with Email</NavLink>
            </button>
            <div className="menu-Display-login-flex">
              <hr />
              <h3>0r</h3>
              <hr />
            </div>
            <button className="menu-Display-login-btn2">
              <NavLink to="/signup">Continue with Google</NavLink>
            </button>
          </div>

          <div className="menu-Display-top-page">
            <div className="menu-Display-top-page-flex-first">
              <div className="menu-Display-top-page-flex-first1">
                <img src={gift} alt="gift" width={"20px"} />
                <h3>Reward center</h3>
              </div>
              <div className="menu-Display-top-page-flex-first1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-second">
              <div className="menu-Display-top-page-flex-second1">
                <img src={history} alt="gift" width={"15px"} />
                <h3>Funds History</h3>
              </div>
              <div className="menu-Display-top-page-flex-first1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-third">
              <div className="menu-Display-top-page-flex-third1">
                <img src={check} alt="gift" width={"20px"} />
                <h3>Perpetual History</h3>
              </div>
              <div className="menu-Display-top-page-flex-third1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-fourth">
              <div className="menu-Display-top-page-flex-fourth1">
                <img src={library} alt="gift" width={"20px"} />
                <h3>Spot History</h3>
              </div>
              <div className="menu-Display-top-page-flex-fourth1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-fifth">
              <div className="menu-Display-top-page-flex-fifth1">
                <img src={person} alt="gift" width={"20px"} />
                <h3>My Referrals</h3>
              </div>
              <div className="menu-Display-top-page-flex-fifth1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-sixth">
              <div className="menu-Display-top-page-flex-sixth1">
                <img src={construction} alt="gift" width={"20px"} />
                <h3>Master Settings</h3>
              </div>
              <div className="menu-Display-top-page-flex-sixth1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-seventh">
              <div className="menu-Display-top-page-flex-seventh1">
                <img src={leaderboard} alt="gift" width={"20px"} />
                <h3>My Copy Trades</h3>
              </div>
              <div className="menu-Display-top-page-flex-seventh1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-eight">
              <div className="menu-Display-top-page-flex-eight1">
                <img src={security} alt="gift" width={"20px"} />
                <h3>Security</h3>
              </div>
              <div className="menu-Display-top-page-flex-eight1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-nineth">
              <div className="menu-Display-top-page-flex-nineth1">
                <img src={help} alt="gift" width={"20px"} />
                <h3>Help Center</h3>
              </div>
              <div className="menu-Display-top-page-flex-nineth1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
            <div className="menu-Display-top-page-flex-tenth">
              <div className="menu-Display-top-page-flex-tenth1">
                <img src={Settings} alt="gift" width={"20px"} />
                <h3>Settings</h3>
              </div>
              <div className="menu-Display-top-page-flex-tenth1">
                <img src={forward} alt="arrow" width={"8px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
