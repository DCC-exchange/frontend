import React from 'react'
import { useState } from 'react'
import Bnb from './Bnb'
import Btc from './Btc'
import Busd from './Busd'
import Usdt from './Usdt'



export default function MarketSpot() {

  const [ usdtactive, setUsdtactive ] = useState('active')
  const [ Busdactive, setBusdactive ] = useState('')
  const [ btcactive, setBtcactive ] = useState('')
  const [ bnbactive, setBnbactive ] = useState('')

 const busdHandle = (()=>{
      setBusdactive('active')
      setUsdtactive('')
      setBnbactive('')
      setBtcactive('')

  })

  const usdtHandle = (()=>{
   setUsdtactive('active')
   setBusdactive('')
   setBnbactive('')
 setBtcactive('')

})

const bnbHandle = (()=>{
 setBnbactive('active')
 setUsdtactive('')
 setBtcactive('')
 setBusdactive('')
})
const btcHandle = (()=>{
 setBtcactive('active')
 setUsdtactive('')
 setBnbactive('')
 setBusdactive('')
})
  return (
    <div className='market-spot'>
          <div className="market-spot-routes">
                <div className="market-spot-route-container">
                      <div className="market-spot-route-content">
                          <h3 onClick={busdHandle} className={Busdactive} >BUSD</h3>
                      </div>
                      <div className="market-spot-route-content">
                          <h3 onClick={usdtHandle}  className={usdtactive}>USDT</h3>
                      </div>
                      <div className="market-spot-route-content">
                          <h3  onClick={bnbHandle} className={bnbactive}>BNB</h3>
                      </div>
                      <div className="market-spot-route-content">
                          <h3 onClick={btcHandle} className={btcactive}>BTC</h3>
                      </div>
                </div>

                <div className="market-spot-header">
                    <div className="market-spot-header-container">
                      <div className='market-spot-header-content'>
                            <h3>Name/Vol</h3>
                          </div>
                          <div className='market-spot-header-content'>
                             <h3>Last Price</h3>
                          </div>
                          <div className='market-spot-header-content'>
                             <h3>24h chg%</h3>
                          </div>
                     </div>
                </div>

                <div className="market-spot-container">
                    <div className="market-spot-content">
                          { usdtactive && <Usdt /> }
                          { bnbactive && <Bnb /> }
                          { btcactive && <Btc /> }
                          { Busdactive && <Busd /> }
                    </div>
                </div>

 
          </div>
    </div>
  )
}
