import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Usdt() {
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
  },[]);


  return (
    <div>
   
         <div className='market-favourite-container'>
         {Coins &&
          Coins.map((coin) => (
              <div key={coin.id} className="market-favourite-contents">
                <div className='market-favourite-content'>
                      <h3> {coin.symbol} <span className='spaner'>/USDT</span></h3>
                      <h4>Vol {coin.total_volume} </h4>
                </div>
                <div className='market-favourite-content'>
                     <h3>{coin.current_price}</h3>
                     <h4> ${coin.current_price}</h4>
                </div>
                <div className='market-favourite-content'>
                {coin.price_change_percentage_24h >= 0 && <h5 className='positive'>+{coin.price_change_percentage_24h.toFixed(2)}%</h5>} 
                {coin.price_change_percentage_24h < 0 && <h5 className='negative'>{coin.price_change_percentage_24h.toFixed(2)}%</h5>}   
            </div>
          </div>
             ))}
        </div>
  
    </div>
  )
}

