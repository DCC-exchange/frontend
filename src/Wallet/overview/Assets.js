import React from 'react'
import '../overview/styles/assets.css'
import Back from '../../images/nwimage/backarrow.svg'
import { Outlet , NavLink } from 'react-router-dom'

const Assets = () => {
  return (
    <div className='asset-main-page'>
        <div className='backarrw-div'>
            <img src={Back} alt='' width={'20px'} />
        </div>
        <div className='asset-page-select'>
            <div className='over-view'>
              <NavLink to='over-view'>
                  Overview
              </NavLink>
            </div>
            <div className='spott'>
            <NavLink to='spot'>
                  Spot
              </NavLink>
            </div>
            <div className='futures'>
            <NavLink to='futures'>
                  Futures
              </NavLink>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Assets
