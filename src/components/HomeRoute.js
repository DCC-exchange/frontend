import React from "react";
import { Outlet,  } from "react-router";
import { NavLink } from "react-router-dom";

export default function HomeRoute() {
    return ( 
    <div className="home-main-trade-wrapper">
    <div className="home-main-trade-display">
    <div className="home-main-trade-text">
      <NavLink className={(({isActive}) => isActive ? 'active' : 'normal')} to="favourite">Favourite</NavLink>
    </div>
    <div className="home-main-trade-text">
      <NavLink to="hot">Hot</NavLink>
    </div>
    <div className="home-main-trade-text">
      <NavLink to="gainers">Gainers</NavLink>
    </div>
    <div className="home-main-trade-text">
      <NavLink to="/login">Losers</NavLink>
    </div>
    <div className="home-main-trade-text">
      <NavLink to="/login">Volume</NavLink>
    </div>
  </div>
    <Outlet />
  </div>
    ) 
}