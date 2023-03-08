import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import './styles/bottomnav.css'
import { ReactComponent as HomeIcon } from '../images/homedcc.svg'
import {ReactComponent as LeaderBoardIcon} from '../images/leaderboarddcc.svg'
import {ReactComponent as WalletIcon} from '../images/walletdcc.svg'
import {ReactComponent as SpotIcon} from '../images/spotdcc.svg'
import {ReactComponent as LogoIcon} from '../images/dccLogo.svg'
export default function BottomNav() {
    return (
        <>
        <div className="bottom-nav-wrapper">
        <div className="bottom-nav">
            <div>
             <NavLink className={(({isActive}) => isActive ? 'bottom-nav-link-active' : '' )} to='index'>
            <HomeIcon />
            </NavLink>   
            <NavLink className={(({isActive}) => isActive ? 'bottom-nav-link-active' : '' )} to='market'>
            <LeaderBoardIcon/>
            </NavLink>
            <NavLink className={(({isActive}) => isActive ? 'bottom-nav-link-active bottom-nav-spot' : 'bottom-nav-spot' )} to='marketspot'>
            <LogoIcon/>
            <p>Spot</p>
            </NavLink>
            <NavLink className={(({isActive}) => isActive ? 'bottom-nav-link-active' : '' )} to='spot'>
            <SpotIcon />
            </NavLink>
            <NavLink className={(({isActive}) => isActive ? 'bottom-nav-link-active' : '' )} to='wallet'>
            <WalletIcon />
            </NavLink>
            </div>
        </div>
        </div>
        <Outlet />
        </>
    )
}