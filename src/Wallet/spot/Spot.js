import React from 'react'
import AssetsRec from '../totalAssets/AssetsRec'
import middle from '../../images/nwimage/middleimg.svg'
import aave from '../../images/nwimage/aave.svg'
import sol from '../../images/nwimage/sol.svg'
import inch from '../../images/nwimage/inch.svg'

const Spot = () => {
  return (
    <div className='total-assets'>
        <AssetsRec />
        <div className='t-assets-img'>
        <img src={middle} alt='' />
      </div>

      <div className='portfolio-c'>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={inch} alt='' width={'20px'} /> 
          <h2>1INCH</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            {/* <h4> = $ 0.00</h4> */}
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={inch} alt='' width={'20px'} /> 
          <h2>1INCH3L</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            {/* <h4> = $ 0.00</h4> */}
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={inch} alt='' width={'20px'} /> 
          <h2>1INCH3s</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            {/* <h4> = $ 0.00</h4> */}
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={sol} alt='' width={'20px'} /> 
          <h2>1SOL</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            {/* <h4> = $ 0.00</h4> */}
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={aave} alt='' width={'20px'} /> 
          <h2>AAVE</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            {/* <h4> = $ 0.00</h4> */}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Spot
