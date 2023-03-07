import React, { useState } from "react";
import "./style/features.css";
import arrow from "../images/dcc arrows.svg";
import chart from "../images/dcc graph.svg";
import dot from "../images/dcc star.svg";
import drop from "../images/drop dcc.svg";
import sign from "../images/sign dcc.svg";
import data from "../images/data dcc.svg";
import time from "../images/dcc box.svg";
import graph from "../images/graph dcc.svg";
import { useEffect } from "react";
import axios from "axios";


export default function Features() {

  const [price, setPrice] = useState()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select')


  const  url =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
  const fetchCoins = (async()=> {
      const res = await axios.get(url)
      setPrice(res.data)
      console.log(res.data.current_price)
    })
    fetchCoins()
   
  }, [])
  
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen)
  // }

  // const selectOption = option => {
  //   setSelectedOption(option)
  //   setIsOpen(false)
  // }

  return (
    <div className="futures-display-cover">
      <div className="futures-display">
        <div className="futures-display-top-flex">
          <div className="futures-display-top-flex1 active-top">
            <h1>USDT-M</h1>
          </div>
          <div className="futures-display-top-flex1">
            <h1>COIN-M</h1>
          </div>
          <div className="futures-display-top-flex1">
            <h1>CFDs</h1>
          </div>
        </div>
      </div>

      <div className="futures-display-main">
        <div className="futures-display-main-inner">
          <div className="futures-display-main-top-flex">
            <div className="futures-display-main-top-flex1">
              <img src={arrow} alt="arrow" width={"20px"} />
              <h1>BTC/USDT</h1>
              <h2>+1.71%</h2>
            </div>
            <div className="futures-display-main-top-flex2">
              <img src={chart} alt="chart" width={"15px"} />
              <img src={dot} alt="dot" width={"20px"} />
            </div>
          </div>

          <div className="futures-display-main-live-flex">
            <div className="futures-display-main-live-flex-left">
              <div className="futures-display-main-live-flex1">
                <div className="futures-display-main-live-left1">
                  <h3>Long</h3>
                </div>
                <div className="futures-display-main-live-left2">
                  <h3>Short</h3>
                </div>
              </div>

              <div className="futures-display-main-live-text">
                <div className="futures-display-main-live-text1">
                  <h3>Available</h3>
                </div>
                <div className="futures-display-main-live-text2">
                  <h3>0[USDT]</h3>
                  <img src={arrow} alt="arrow" width={"20px"} />
                </div>
              </div>

                  <div className="futures-display-main-limit-page">
                    <img src={sign} alt="sign" width={"15px"} />
                    <h3>Limit</h3>
                    <img src={drop} alt="drop" width={"15px"} />
                  </div>

                  <div className="futures-display-main-number-page">
                    <div className="futures-display-main-number-page1">
                      <h1>-</h1>
                    </div>
                    <div className="futures-display-main-number-page2">
                      <h3>28474</h3>
                    </div>
                    <div className="futures-display-main-number-page3">
                      <h1>+</h1>
                    </div>
                  </div>

              <div className="futures-display-main-coin-page">
                <div className="futures-display-main-coin-page1">
                  <h3>BTC</h3>
                </div>
                <div className="futures-display-main-coin-page2">
                  <h3>USDT</h3>
                </div>
              </div>

              <div className="futures-display-main-amount-page">
                <div className="futures-display-main-amount-page1">
                  <h1>-</h1>
                </div>
                <div className="futures-display-main-amount-page2">
                  <h3>Amount(BTC)</h3>
                </div>
                <div className="futures-display-main-amount-page3">
                  <h1>+</h1>
                </div>
              </div>

              <div className="futures-display-main-line-page">
                <div className="futures-display-main-line-page1">
                  <hr />
                </div>
                <div className="futures-display-main-line-page2">
                  <div className="futures-display-main-line-circle active"></div>
                  <div className="futures-display-main-line-circle"></div>
                  <div className="futures-display-main-line-circle"></div>
                  <div className="futures-display-main-line-circle"></div>
                  <div className="futures-display-main-line-circle"></div>
                </div>
              </div>

              <div className="futures-display-main-max-page">
                <div className="futures-display-main-max-page1">
                  <h3>Max</h3>
                  <h1>0.000 BTC</h1>
                </div>
                <div className="futures-display-main-max-page2">
                  <h3>Margin</h3>
                  <h1>0 USDT</h1>
                </div>
              </div>

              <div className="futures-display-main-buy-page">
                <button>Buy/Long</button>
              </div>
            </div>

            <div className="futures-display-main-live-flex-right">
              <div className="futures-display-main-live-flex2">
                <div className="futures-display-main-live-right1">
                  <h3>Price</h3>
                </div>
                <div className="futures-display-main-live-right2">
                  <h3>Amount</h3>
                </div>
              </div>

                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>
                  <div className="futures-display-main-live-flex-right2">
                    <h3>11,383.90</h3>
                    <h2>0.954522</h2>
                  </div>

              <div className="futures-display-main-live-middle">
                <h1>17,237.57</h1>
                <h3>Mark Price 17,407.5</h3>
              </div>

              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>
              <div className="futures-display-main-live-flex-right3">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div>

              <div className="futures-display-main-live-flex-last">
                <div className="futures-display-main-live-flex-last1">
                  <h3>0.5</h3>
                  <img src={drop} alt="drop" width={"15px"} />
                </div>
                <div className="futures-display-main-live-flex-last2">
                  <img src={graph} alt="graph" width={"25px"} />
                </div>
              </div>
            </div>
          </div>

          <div className="futures-display-main-page-flex">
            <div className="futures-display-main-page-flex1">
              <h1 className="futures-display-main-page-flex1-text active_text">
                Positions(0)
              </h1>
              <h1 className="futures-display-main-page-flex1-text">
                Orders(0)
              </h1>
            </div>
            <div className="futures-display-main-page-flex2">
              <img src={time} alt="time" width={"20px"} />
            </div>
          </div>

          <div className="futures-display-main-page-data">
            <img src={data} alt="data" width={"60px"} />
            <h1>No Data Yet!!!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
