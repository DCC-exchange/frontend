import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useState, useEffect } from "react";
// import axios from "axios";

import "./style/home.css";
import merry from "../images/merry dcc.svg";
// import wallet2 from "../images/Wallet (1).svg";
import main from "../images/main pic.svg";
import notify from "../images/notify dcc.svg";
import contact from "../images/conatct dcc.svg";
import mining from "../images/mining dcc.svg";
import convert from "../images/convert dcc.svg";
import position from "../images/position dcc.svg";
import deposit from "../images/depositdcc.svg";
import trade from "../images/trade exchange.svg";
import laptop from "../images/laptop dcc.svg";
import bitcoin from "../images/bitcoin dcc.svg";
import annouceIcon from "../images/announce.svg";
import logo from "../images/dcc logo.svg";
import Ellipse from "../images/Ellipse 31.svg";
import arrow from "../images/arrow back dcc.svg";
import home2 from "../images/home2 img.svg";
import Menu from "./Menu";

import "swiper/swiper.min.css";

// import { Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default function Home() {
  const coins = [
    {
      coin1: "BTC",
      profit: "3.23",
      coin2: "USDT",
      price: "23203.45",
      volume: "24H Volume 8,002M",
    },
    {
      coin1: "ETH",
      profit: "0.23",
      coin2: "USDT",
      price: "1632.43",
      volume: "24H Volume 1202M",
    },
    {
      coin1: "AVAX",
      profit: "1.23",
      coin2: "USDT",
      price: "23.45",
      volume: "24H Volume 128M",
    },
    {
      coin1: "NEAR",
      profit: "5.23",
      coin2: "USDT",
      price: "2.82",
      volume: "24H Volume 802M",
    },
  ];

  const [chat, setChat] = useState(false);
  const [desktopchat, setDesktopchat] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  function hideChat() {
    setChat(false);
  }
  function hideMenu() {
    setOpenMenu(false);
  }

  // const weekday = new Date().toLocaleDateString("en-us", { weekday: "long" });
  let weekdays = new Date();
  let weekday = weekdays.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let notification = [4, 4, 3, 4, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3];

  return (
    <div className="homePage">
      {chat && (
        <div className="chat-display-cover">
          <div className="chat-display-top">
            <img src={logo} alt="logo" width={"30px"} />
            <h3>DCC</h3>
            <h4 onClick={hideChat}>&#10008;</h4>
          </div>
          <div className="chat-date">
            <h3>{weekday}</h3>
          </div>
          <div className="chat-display-body">
            <div className="chat-display-chatting">
              <h3>ks</h3>
            </div>
          </div>
          <div className="chat-display-bottom">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <h1>&#10147;</h1>
          </div>
        </div>
      )}
      {openMenu && (
        <>
          <div className="menu-Display">
            <div className="menu-Display-cover">
              <div className="menu-Display-top">
                <div className="menu-top">
                  <img
                    onClick={hideMenu}
                    src={arrow}
                    alt="arrow"
                    width={"10px"}
                  />
                </div>
              </div>
              <Menu />
            </div>
          </div>
        </>
      )}

      <div className="home-top-flex">
        <div className="home-top-flex1">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="menu-home-icon"
          >
            &#9776;
          </div>
        </div>
        <div className="home-top-flex2">
          <div className="profile-nav">
            <img src={Ellipse} alt="Ellipse" width={"30px"} />
          </div>
          <NavLink>
            <img onClick={() => setChat(!chat)} src={contact} alt="contact" />
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
      </div>
      <div className="desktop-cover">
        <div className="desktop-cover-inner">
          <div className="desktop-top-second">
            <NavLink to="/">
              <h3>Lite</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Deposit</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Copy Trading</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Convert</h3>
            </NavLink>
          </div>

          <div className="desktop-home">
            <div className="desktop-main-display">
              <div className="desktop-main-display-text">
                <h1>Invest Better</h1>
                <h2>
                  Trade crypto on an easy-to-use platform. Bitcoin, Ethereum,
                  and 50+ other crypto assets at your fingertips
                </h2>
                <NavLink to="/">
                  <h3>Start Trading now</h3>
                </NavLink>
              </div>
              <div className="desktop-main-display-image">
                <img src={main} alt="main" width={"400px"} />
              </div>
            </div>

            <div
              onClick={() => setDesktopchat(!desktopchat)}
              className="chat-link"
            >
              <div className="chat-link-inner">
                <h3>&#9993;</h3>
                <h4>Support</h4>
              </div>
            </div>

            {desktopchat && (
              <div className="chat-display-cover">
                <div className="chat-first">
                  <div className="chat-display-top">
                    <img src={logo} alt="logo" width={"30px"} />
                    <h3>DCC</h3>
                  </div>
                </div>
                <div className="chat-second">
                  <div className="chat-second-1">
                    <div className="chat-date">
                      <h3>{weekday}</h3>
                    </div>
                    <div className="chat-display-body">
                      <div className="chat-display-chatting">
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                      </div>
                    </div>
                  </div>

                  <div className="chat-display-bottom">
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                    <h1>&#10147;</h1>
                  </div>
                </div>
              </div>
            )}

            <div className="coin-swipe-section-cover">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="desktop-home-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="desktop-home-slider-inner">
                  <div className="desktop-home-slider-inner1">
                    <img src={bitcoin} alt="bitcoin" />
                  </div>
                  <div className="desktop-home-slider-inner2">
                    <img src={laptop} alt="laptop" />
                  </div>
                  <div className="desktop-home-slider-inner3">
                    <img src={trade} alt="trade" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="annountment-desktop">
            <div className="annouceIcon-desktop">
              <h4>Latest News</h4>
            </div>
            <div className="home-page-display-text">
              <div className="home-page-display-text1">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day.
                </h3>
              </div>
              <div className="home-page-display-text2">
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>Dcc Exchange, bringing the best trading AI</h3>
              </div>
            </div>
            <div className="annouceIcon-desktop">
              <h4>Latest</h4>
            </div>
            <div className="home-page-display-text-second">
              <div className="home-page-display-text-second1">
                <h3>Trading all kinds of crypto asset on spot.</h3>
              </div>
              <div className="home-page-display-text2">
                <h3>Dcc Exchange, bringing the best trading AI</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
            </div>
            <div className="annouceIcon-desktop">
              <h4>News</h4>
            </div>
            <div className="home-page-display-text-third">
              <div className="home-page-display-text-third1">
                <h3>Dcc Exchange, bringing the best trading AI.</h3>
              </div>
              <div className="home-page-display-text2">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
              <div className="home-page-display-text3">
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-display">
        <div className="home-display-cover">
          <div className="home-page">
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
                <img src={merry} alt="merry" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bitcoin} alt="bitcoin" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={laptop} alt="laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={merry} alt="merry" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={trade} alt="trade" />
              </SwiperSlide>
            </Swiper>
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
            <div className="home-main-lists-first-flex2">
              <NavLink to="/login">
                <img src={mining} alt="mining" width={"20px"} />
                <h3>Lite</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex3">
              <NavLink to="/converter">
                <img src={convert} alt="convert" width={"20px"} />
                <h3>Convert</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex4">
              <NavLink to="/login">
                <img src={position} alt="position" width={"20px"} />
                <h3>Copy trading</h3>
              </NavLink>
            </div>
            <div className="home-main-lists-first-flex5">
              <NavLink to="/login">
                <img src={deposit} alt="deposit" width={"25px"} />
                <h3>Deposit</h3>
              </NavLink>
            </div>
          </div>

          <div className="home-second-image">
            <img src={home2} alt="home2" />
          </div>

          <div className="home-main-trade-display">
            <div className="home-main-trade-text">
              <NavLink to="favourite">Favourite</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="hot">Hot</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="gainers">Gainers</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="losers">Losers</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="volume">Volume</NavLink>
            </div>
          </div>
          <div className="token-container">
            <div className="token-contents"></div>
          </div>
        </div>
        <div className="coin-height">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
