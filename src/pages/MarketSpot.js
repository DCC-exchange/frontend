import React from 'react'
import "./style/MarketSpot.css";
import search from "../images/search.svg";
import round from "../images/round.svg";

export default function MarketSpot() {
  return (
    <div className='market_favourite_header_spot'>
      <div className='favourite_head_spot'>
        <div className='search_header_spot'>
        <img  src={search} alt="search" width={"20"} />
        <input type="text"  placeholder='Search Coin'/>
        </div>
        <div className='round_icon_spot'>
        <img  src={round} alt="round" width={"270"} />
        </div>
        <div className='favourites_spot_future_flex_spot'>
          <div className='favourites_spot '>
            <h3>Fovourites</h3>
          </div>
          <div className='spot_spot active'>
            <h3>Spot</h3>
          </div>
          <div className='futures_spot '>
            <h3>Futures</h3>
          </div>
        </div>
        <div className='name_last_spot'>
        <div className='spot_flex'>
          <div className='spot_busd active_spot'>
            <h3>BUSD</h3>
          </div>
          <div className='spot_usdt'>
            <h3>USDT</h3>
          </div>
          <div className='spot_bnb'>
            <h3>BNB</h3>
          </div>
          <div className='spot_btc'>
            <h3>BTC</h3>
          </div>
        </div>
        <div className='name_last_flex_spot'>
          <div className='name_vol_spot'>
            <h3>Name/Vol</h3>
          </div>
          <div className='last_price_spot_1'>
            <h3>Last Price</h3>
          </div>
          <div className='future_val_spot'>
            <h3>24h chg%</h3>
          </div>
        </div>
        </div>
      
        <div className='name_last_flex_1_spot'>
          <div className='name_vol_1_spot'>
            <h3>BNB <span className='spaner_spot'>/BUSD</span>
            <span className='ten_spot'>10x</span> 
             </h3>
          </div>
          <div className='last_price_1_spot'>
            <h3>246.9 <span className='span_block_spot'>$246.90</span></h3>
          </div>
          <div className='future_val_1_spot'>
            <h3>+0.73%</h3>
          </div>
        </div>
        <div className='name_last_flex_1_spot'>
          <div className='name_vol_1_spot'>
            <h3>ETH <span className='spaner_spot'>/BUSD</span>
            <span className='ten_spot'>10x</span> 
            </h3>
          </div>
          <div className='last_price_1_spot_2'>
            <h3>1,246.9 <span className='span_block_spot'>$246.90</span>
            </h3>
          </div>
          <div className='future_val_1_spot'>
            <h3>+0.73%</h3>
          </div>
        </div>
        <div className='name_last_flex_2_spot'>
          <div className='name_vol_1_spot_3'>
            <h3>DODG <span className='spaner_spot'>/BUSD</span>
            <span className='ten_spot'>10x</span> 
            </h3>
          </div>
          <div className='last_price_2_spot_3'>
            <h3>1246.9 <span className='span_block_spot'>$246.90</span></h3>
          </div>
          <div className='future_val_2_spot'>
            <h3>+0.73%</h3>
          </div>
        </div>
        <div className='name_last_flex_2_spot'>
          <div className='name_vol_3'>
            <h3>FSA <span className='spaner_spot'>/BUSD</span>
            <span className='ten_spot'>10x</span> 
            </h3>
          </div>
          <div className='last_price_3_spot'>
            <h3>246.9 <span className='span_block_spot'>$246.90</span></h3>
          </div>
          <div className='future_val_1_spot'>
            <h3>+0.73%</h3>
          </div>
        </div>
      </div>
      <div className='name_last_flex_1_spot'>
          <div className='name_vol_1_spot'>
            <h3>ABD <span className='spaner_spot'>/BUSD</span>
            <span className='ten_spot'>10x</span> 
            </h3>
          </div>
          <div className='last_price_1_spot_2'>
            <h3>246.9 <span className='span_block_spot'>$246.90</span></h3>
          </div>
          <div className='future_val_1_spot'>
            <h3>+0.73%</h3>
          </div>
        </div>
      <div className='round_icon_1_spot'>
        <img  src={round} alt="round" width={"210"} />
        </div>
        
    </div>
  );
}