import React from "react";
import "./style/hot.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hot() {
  const [Coins, setCoins] = useState("");
  console.log(Coins);

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
        <div className="hot-coin-header">
          <table className="weekly-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last price</th>
                <th>Vol(USD)</th>
              </tr>
            </thead>

            <div className="coin-inner-scroll">
              {Coins &&
                Coins.map((coin) => (
                  <tbody key={coin.id}>
                    <tr>
                      <td>{coin.name}</td>
                      <td>{coin.current_price}</td>
                      <td className="coin-name">
                        {coin.price_change_24h.toFixed(4)}
                      </td>
                    </tr>
                  </tbody>
                ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}
