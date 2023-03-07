import React from 'react'

export default function MarketFavourite() {
  return (
    <div className='market-favourite'>
      <div className='market-favourite-header'>
            <div className='market-favourite-header-contents'>
            <h3>Name/Vol</h3>
            </div>
            <div className='market-favourite-header-contents'>
            <h3>Last Price</h3>
            </div>
            <div className='market-favourite-header-contents'>
            <h3>24h chg%</h3>
            </div>
        </div>

        
        <div className='market-favourite-container'>
          <div className="market-favourite-contents">
                <div className='market-favourite-content'>
                      <h3>BNB <span className='spaner'>/BUSD</span></h3>
                </div>
                <div className='market-favourite-content'>
                     <h3>246.9</h3>
                     <h4> $246.90</h4>
                </div>
                <div className='market-favourite-content'>
                     <h5>+0.73%</h5>
            </div>
          </div>
          <div className="market-favourite-contents">
                <div className='market-favourite-content'>
                      <h3>BTC <span className='spaner'>/USDT</span></h3>
                </div>
                <div className='market-favourite-content'>
                     <h3>2463839.9</h3>
                     <h4> $2348.90</h4>
                </div>
                <div className='market-favourite-content'>
                     <h5>+0.73%</h5>
            </div>
          </div>
        </div>
  </div>
  )
}
