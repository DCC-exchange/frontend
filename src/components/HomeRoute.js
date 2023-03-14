import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function HomeRoute() {
    const {pathname} = useLocation()

    return ( 
    <div className="home-main-trade-display">
    <div className="home-main-trade-text">
      <NavLink className={(({isActive}) => isActive ? 'active' : 'normal')} to="favourite">Favourite</NavLink>
    </div>
    <div className="home-main-trade-text">
    <NavLink className={pathname === '/index' && 'active'} to="hot">Hot</NavLink>
    </div>
    <div className="home-main-trade-text">
    <NavLink className={(({isActive}) => isActive ? 'active' : 'normal')} to="gainers">Gainers</NavLink>
    </div>
    <div className="home-main-trade-text">
    <NavLink className={(({isActive}) => isActive ? 'active' : 'normal')} to="/login">Losers</NavLink>
    </div>
    <div className="home-main-trade-text">
    <NavLink className={(({isActive}) => isActive ? 'active' : 'normal')} to="/login">Volume</NavLink>
    </div>
  </div>
    ) 
}