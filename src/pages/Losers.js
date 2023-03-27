import React from "react";
import "./style/hot.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Gainers() {
  const [lose, setLose] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setLose(
        result.data
          .filter((coin) => coin.price_change_percentage_24h < 1)
          .map((coin) => {
            return {
              name: coin.name,
              current_price: coin.current_price,
              lose: coin.price_change_percentage_24h,
            };
          })
      );
    };

    fetchData();
  }, []);

  for (let i = 0; i < lose.length; i++) {
    if (lose[i].price_change_percentage_24h > 10) {
      console.log(lose[i]);
    }
  }

  // console.log(Math.max(...o))

  return (
    <div className="Hot-coins">
      <div className="hot-coins-container">
        <div className="hot-coin-header">
          <table className="weekly-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last price</th>
                <th>24h chg%</th>
              </tr>
            </thead>

            <div className="coin-inner-scroll">
              {lose &&
                lose.map((coin) => (
                  <tbody key={coin.id}>
                    <tr>
                      <td>{coin.name}</td>
                      <td>{coin.current_price}</td>
                      <td className="coin-name">
                        <button className="negative">{coin.lose.toFixed(4)}% </button>
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
