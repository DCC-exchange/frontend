import React from 'react'
import './style/hot.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarIcon from '@mui/icons-material/Star';

export default function Volume() {
    const [ Coins, setCoins ] = useState('')
    // const [ Gainers, setGainers ] = useState('')
    
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
        .then(res =>{
            console.log(res.data);
            setCoins(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])


for(let i = 0; i < Coins.length; i++){
    if(Coins[i].price_change_percentage_24h > 10){
    console.log(Coins[i])
    }
}

    // console.log(Math.max(...o))

  return (
    <div className='Hot-coins'>
        <div className="hot-coins-container">
            

            { Coins && Coins.map((coin )=> (
                <div key={coin.id} className="hot-coin-content">
                    <div className="coin-name1">
                            <p> {coin.name} </p>
                     </div>
                    <div className="coin-name">
                            <p> {coin.current_price} </p>
                            <p>${coin.current_price} </p>
                     </div>
                     <div className="coin-name">
                     <p>${coin.total_volume} </p>
                    </div>
                    <div className=''>
                        <StarIcon className='h-7 w-7' />
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}
