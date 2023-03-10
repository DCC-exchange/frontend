import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style/home.css";
// import menu from "../images/menuIcon.svg";
import merry from "../images/merry dcc.svg";
import notify from "../images/notify dcc.svg";
import contact from "../images/conatct dcc.svg";
import copy from "../images/copy svg.svg";
import mining from "../images/mining dcc.svg";
import convert from "../images/convert dcc.svg";
import position from "../images/position dcc.svg";
import deposit from "../images/depositdcc.svg";
import trade from "../images/trade exchange.svg";
import laptop from "../images/laptop dcc.svg";
import bitcoin from "../images/bitcoin dcc.svg";
import annouceIcon from "../images/announce.svg";

import "swiper/swiper.min.css";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import HomeRoute from "../components/HomeRoute";

SwiperCore.use([Autoplay]);

export default function Home() {

  return (
    <div className="homePage">
      <div className="home-top-flex">
        <div className="home-top-flex1">
          <div className="login">
            <NavLink to="/login">Log in</NavLink>
          </div>
          <div className="signup">
            <NavLink to="/signup">Sign up </NavLink>
          </div>
        </div>
        <div className="home-top-flex2">
          <NavLink to="/login">
            <img src={contact} alt="Profile logo" />
          </NavLink>
          <NavLink to="/login">
            <img src={notify} alt="Profile logo" />
          </NavLink>
        </div>
      </div>


      <div className="home-display">
        <div className="home-display-cover">
          <div className="home-page">
            {/*  */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <img src={merry} alt="merry" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={bitcoin} alt="bitcoin" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={laptop} alt="laptop" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={merry} alt="merry" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={trade} alt="trade" />
              </SwiperSlide>
            </Swiper>
            {/*  */}
          </div>

          <div className="annountment">
            <div className="annouceIcon">
              <img src={annouceIcon} alt="" />
            </div>
            <div className="home-page-display-text">
              <div className="home-page-display-text1">
                <h3>Dcc Exchange, bringing the best trading AI.</h3>
              </div>
              <div className="home-page-display-text2">
                {" "}
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
            </div>
          </div>

          <div className="home-main-lists-first-flex">

            <div className="home-main-lists-first-flex1">
              <NavLink to='/login'>
                <img src={copy} alt="copy" width={"20px"} />
                <h3>Copy trading</h3>
              </NavLink>
            </div>

            <div className="home-main-lists-first-flex2">
              <NavLink to='/login'>
                <img src={mining} alt="mining" width={"20px"} />
                <h3>Mining</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex3">
              <NavLink to='/login'>
                <img src={convert} alt="convert" width={"20px"} />
                <h3>Convert</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex4">
              <NavLink to='/login'>
                <img src={position} alt="position" width={"20px"} />
                <h3>Position</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex5">
              <NavLink to='/login'>
                <img src={deposit} alt="deposit" width={"25px"} />
                <h3>Deposit</h3>
              </NavLink>
            </div>
          </div>

    
          {/* Home Routes */}
          <div className="home-main-trade-wrapper">
            <HomeRoute />
            <Outlet />
          </div>
          <div className="token-container">
            <div className="token-contents"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
