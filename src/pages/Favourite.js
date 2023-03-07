import React from 'react'
import good from "../images/good dcc.svg";


export default function Favourite() {
  return (
    <div>
          <div className="home-main-trade-cover">
            <div className="home-main-trade-cover-hot">
            </div>
            <div className="home-main-trade-cover-favourites">
              <div className="home-main-trade">
                <div className="home-main-trade-first-flex">
                  <h1>
                    BNB <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>260.1</h2>
                      <h3 className='positive'>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
                <div className="home-main-trade-first-flex2">
                  <h1>
                    BTC <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>22,319.1</h2>
                      <h3 className='negative'>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-main-trade">
                <div className="home-main-trade-first-flex">
                  <h1>
                    ETH <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>1260.1</h2>
                      <h3>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
                <div className="home-main-trade-first-flex2">
                  <h1>
                    SNM <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>1556.1</h2>
                      <h3>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-main-trade">
                <div className="home-main-trade-first-flex">
                  <h1>
                    PHB <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>0.5431</h2>
                      <h3>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
                <div className="home-main-trade-first-flex2">
                  <h1>
                    FIDA <span>/BUSD</span>
                  </h1>
                  <div className="home-main-trade-first-inner-flex">
                    <div className="home-main-trade-first-inner-flex1">
                      <h2>260.1</h2>
                      <h3>-3.55%</h3>
                    </div>
                    <div className="home-main-trade-first-inner-flex2">
                      <img src={good} alt="good logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-main-trade-first-footer">
            <div className="home-main-trade-first-footer-btn">
              <button>Add Favorites</button>
            </div>
          </div>
    </div>
  )
}
