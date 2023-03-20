import React from "react";
import "./style/hot.css";
import { useState, useEffect } from "react";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';

export default function Hot() {
  const [Coins, setCoins] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, 500);
    return () => clearInterval(interval);
  });

  return (
    <div className="Hot-coins">
      <div className="hot-coins-container">

        {Coins &&
          Coins.map((coin) => (
            <div key={coin.id} className="hot-coin-content">
              <div className="coin-name1">
                <p> {coin.name} </p>
              </div>
              <div className="coin-name">
                <p> {coin.current_price} </p>
                <p>${coin.current_price} </p>
              </div>
              <div className="coin-name">
                {coin.price_change_percentage_24h >= 0 && (
                  <button className="positive">
                    +{coin.price_change_percentage_24h.toFixed(2)}%{" "}
                  </button>
                )}
                {coin.price_change_percentage_24h < 0 && (
                  <button className="negative">
                    {" "}
                    {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                  </button>
                )}
              </div>
              <div className=''>
                        <StarIcon className='h-7 w-7' />
                    </div>

            </div>
          ))}
      </div>
    </div>
  );
}
