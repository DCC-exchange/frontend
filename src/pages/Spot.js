import React from "react";
import "./style/spot.css";
import arrow from "../images/dcc arrows.svg";
import chart from "../images/dcc graph.svg";
import dot from "../images/dcc star.svg";
import drop from "../images/drop dcc.svg";
import sign from "../images/sign dcc.svg";
import data from "../images/data dcc.svg";
import time from "../images/dcc box.svg";
import graph from "../images/graph dcc.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Spot() {
  const [spotCoins, setSpotCoins] = useState("");
  const [showDrop, setShowDrop] = useState(true);
  // const [showLimit, setShowLimit] = useState(true);
  // const [showMarket, setShowMarket] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
        )
        .then((res) => {
          setSpotCoins(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
    return () => clearInterval(interval);
  });

  const [showDropSelect, setShowDropSelect] = useState("Limit");

  function selectSwap(e) {
    if (e === 1) {
      setShowDropSelect("Market");
    } else if (e === 2) {
      setShowDropSelect("Limit");
    }
  }

  return (
    <div className="spot-display-cover">
      <div className="spot-display">
        <div className="spot-display-top-flex">
          <div className="spot-display-top-flex1 active-top">
            <h1>Convert</h1>
          </div>
          <div className="spot-display-top-flex1">
            <h1>Spot</h1>
          </div>
          <div className="spot-display-top-flex1">
            <h1>LVTs(3X)</h1>
          </div>
        </div>
      </div>

      <div className="spot-display-main">
        <div className="spot-display-main-inner">
          <div className="spot-display-main-top-flex">
            <div className="spot-display-main-top-flex1">
              <img src={arrow} alt="arrow" width={"20px"} />
              <h1>BTC/USDT</h1>
              <h2>+1.71%</h2>
            </div>
            <div className="spot-display-main-top-flex2">
              <img src={chart} alt="chart" width={"15px"} />
              <img src={dot} alt="dot" width={"20px"} />
            </div>
          </div>

          <div className="spot-display-main-live-flex">
            <div className="spot-display-main-live-flex-left">
              <div className="spot-display-main-live-flex1">
                <div className="spot-display-main-live-left1">
                  <h3>Buy</h3>
                </div>
                <div className="spot-display-main-live-left2">
                  <h3>Sell</h3>
                </div>
              </div>
              <div className="spot-display-main-live-text">
                <div className="spot-display-main-live-text1">
                  <h3>Available</h3>
                </div>
                <div className="spot-display-main-live-text2">
                  <h3>0 USDT</h3>
                  <img src={arrow} alt="arrow" width={"20px"} />
                </div>
              </div>
              <div className="spot-display-main-limit-page-outer">
                <div
                  onClick={() => setShowDrop(!showDrop)}
                  className="spot-display-main-limit-page"
                >
                  <img src={sign} alt="sign" width={"10px"} />
                  <h3>{showDropSelect}</h3>x
                  <img src={drop} alt="drop" width={"10px"} />
                </div>
                {showDrop && (
                  <div className="spot-display-main-limit-page-inner">
                    <div className="spot-display-main-limit-page-drop">
                      <h3 onClick={() => selectSwap(1)}>Market</h3>
                      <h3 onClick={() => selectSwap(2)}>Limit</h3>
                    </div>
                  </div>
                )}
              </div>

              {/* <div>
                {spotCoins &&
                  spotCoins.map((spotBtc) => (
                    <div className="spot-display-main-number-page">
                      <div className="spot-display-main-number-page1">
                        <h1>-</h1>
                      </div>
                      <div
                        key={spotBtc.id}
                        className="spot-display-main-number-page2"
                      >
                        <h3>{spotBtc.current_price}</h3>
                      </div>
                      <div className="spot-display-main-number-page3">
                        <h1> +</h1>
                      </div>
                    </div>
                  ))}

                <div className="spot-display-main-amount-page">
                  <div className="spot-display-main-amount-page1">
                    <h1>-</h1>
                  </div>
                  <div className="spot-display-main-amount-page2">
                    <h3>Amount(BTC)</h3>
                  </div>
                  <div className="spot-display-main-amount-page3">
                    <h1>+</h1>
                  </div>
                </div>

                <div className="spot-display-main-percent-page">
                  <ul className="percent-page-top">
                    <li className="percent-page">25%</li>
                    <li className="percent-page">50%</li>
                    <li className="percent-page">75%</li>
                    <li className="percent-page">100%</li>
                  </ul>
                </div>

                <div class="spot-display-main-number-page">
                  <div class="spot-display-main-number-page1">
                    <h1>-</h1>
                  </div>
                  <div class="spot-display-main-number-page2">
                    <h3>Total(USDT)</h3>
                  </div>
                  <div class="spot-display-main-number-page3">
                    <h1>+</h1>
                  </div>
                </div>
              </div> */}

              {/* <div>
                <div className="market-display-page">
                  <h2>Market</h2>
                </div>

                <div class="spot-display-main-number-page">
                  <div class="spot-display-main-number-page1">
                    <h1>-</h1>
                  </div>
                  <div class="spot-display-main-number-page2">
                    <h3>Total(USDT)</h3>
                  </div>
                  <div class="spot-display-main-number-page3">
                    <h1>+</h1>
                  </div>
                </div>

                <div className="spot-display-main-percent-page">
                  <ul className="percent-page-top">
                    <li className="percent-page">25%</li>
                    <li className="percent-page">50%</li>
                    <li className="percent-page">75%</li>
                    <li className="percent-page">100%</li>
                  </ul>
                </div>
              </div> */}

              <div class="spot-display-main-text-page">
                <h2>Total</h2>
                <h1>0 USDT</h1>
              </div>
              <div class="spot-display-main-buy-page">
                <button>Buy BTC</button>
              </div>
            </div>

            <div className="spot-display-main-live-flex-right">
              <div className="spot-display-main-live-flex2">
                <div className="spot-display-main-live-right1">
                  <h3>Price</h3>
                </div>
                <div className="spot-display-main-live-right2">
                  <h3>Amount</h3>
                </div>
              </div>

              {spotCoins &&
                spotCoins.map((spotCoin) => (
                  <div
                    key={spotCoin.id}
                    className="spot-display-main-live-flex-right2"
                  >
                    <h3>{spotCoin.current_price}</h3>
                    {spotCoin.price_change_percentage_24h >= 0 && (
                      <h2>{spotCoin.price_change_percentage_24h.toFixed(3)}</h2>
                    )}
                  </div>
                ))}

              {/* <div className="spot-display-main-live-flex-right2">
                <h3>11,383.90</h3>
                <h2>0.954522</h2>
              </div> */}

              {spotCoins &&
                spotCoins.map((spotCoin) => (
                  <div
                    key={spotCoin.id}
                    className="spot-display-main-live-middle"
                  >
                    <h1>{spotCoin.current_price}</h1>
                    <h3>Mark Price {spotCoin.current_price}</h3>
                  </div>
                ))}

              {spotCoins &&
                spotCoins.map((spotCoin) => (
                  <div
                    key={spotCoin.id}
                    className="spot-display-main-live-flex-right3"
                  >
                    <h3>{spotCoin.current_price}</h3>
                    {spotCoin.price_change_percentage_24h < 0 && (
                      <h2>{spotCoin.price_change_percentage_24h.toFixed(3)}</h2>
                    )}
                  </div>
                ))}

              <div className="spot-display-main-live-flex-last">
                <div className="spot-display-main-live-flex-last1">
                  <h3>0.1</h3>
                </div>
                <div className="spot-display-main-live-flex-last2">
                  <img src={graph} alt="graph" width={"25px"} />
                </div>
              </div>
            </div>
          </div>

          <div className="spot-display-main-page-flex">
            <div className="spot-display-main-page-flex1">
              <h1 className="spot-display-main-page-flex1-text active_text">
                Positions(0)
              </h1>
              <h1 className="spot-display-main-page-flex1-text">Orders(0)</h1>
            </div>
            <div className="spot-display-main-page-flex2">
              <img src={time} alt="time" width={"20px"} />
            </div>
          </div>

          <div className="spot-display-main-page-data">
            <img src={data} alt="data" width={"60px"} />
            <h1>No Data Yet!!!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
