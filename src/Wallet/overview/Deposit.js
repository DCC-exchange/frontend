import React, { useState } from 'react'
import '../overview/styles/deposit.css'
import Back from '../../images/nwimage/backarrow.svg'
import cal from '../../images/nwimage/cal.svg'
import usdtb from '../../images/nwimage/usdtb.svg'
import preset from '../../images/nwimage/presset.png'
import cad from '../../images/nwimage/cad.svg'
import euro from '../../images/nwimage/euro.svg'
import doll from '../../images/nwimage/doll.svg'
import dolla from '../../images/nwimage/dolla.svg'

const Deposit = ({clear}) => {

  const [cryptoFiat, setCryptoFiat] = useState(0)

  const handleCryptoFiat = (index) => {
    setCryptoFiat(index)
  }

    const handleGoBack = (()=>{
        clear()
    })

  return (
    <div className='deposit-main'>
      <div className='deposit-top'>
        <div onClick={handleGoBack}><img src={Back} alt='' /></div>

        <div className='crypto-fiat'>
            <h2 onClick={() => handleCryptoFiat(0)}>Crypto</h2>
            <h3 onClick={() => handleCryptoFiat(1)}>Fiat</h3>
        </div>

        <div><img src={cal} alt='' width={'15px'} /></div>
      </div>
      <div className='line-div'></div>

      {cryptoFiat === 0 && (
        <>
          <div className='deposit-sec'>
          <div className='img-usdt'>
              <img src={usdtb} alt='' width={'18px'} />
              <h2>USDT</h2>
          </div>
          <div className='img-select-coin'>
              <h2>Select Coin</h2>
              <img src={preset} alt='' width={'4px'} />
          </div>
        </div>
        <div className='line-div'></div>
  
        <div className='network-'>Network</div>
  
        <div className='btn-div-sel'>
          <div>TRC 20</div>
          <div>BEP20[ BSC ]</div>
          <div>ERC 20</div>
        </div>
        <div className='btn-div-sel'>
          <div>MATIC</div>
          <div>SOL</div>
        </div>
  
        <div className='p-cl-div'>
          <p>The minimum deposit is 0 USDT. Otherwise the deposit will fail.</p>
          <p>Deposit any other crypto except USDT to this address may result of loss funds</p>
          <p>Confirm the correct address, an incorrect address will not be able to deposit successfully.</p>
        </div>
  
        <div className='deposit-below-div'>
          <div className='deposit-left'>
            <h4>Buy</h4>
            <h2>USDT</h2>
          </div>
          <div className='deposit-right'>
           <img src={cad} alt='' width={'20px'} />
           <img src={euro} alt='' width={'20px'} />
           <img src={doll} alt='' width={'20px'} />
          </div>
        </div>
        </>
      )}
    
        {cryptoFiat === 1 && (
          <>
          <div className='fiat-main-div'>
            <div className='receivee'>Receive</div>
            <div className='receive-below'>
              <div className='amount'>1.9700</div>
              <div className='receive-right'>
              <img src={usdtb} alt='' width={'15px'} />
              <h3>USDT</h3>
              <img src={preset} alt='' width={'4px'} />
              </div>
            </div>

            <div className='spend-'>
              <div className='spennd'>Spend</div>
              <div className='reff'>Reference price $ 1.00</div>
            </div>

            <div className='receive-below'>
              <div className='amount'>1.97</div>
              <div className='receive-right'>
              <img src={dolla} alt='' width={'15px'} />
              <h3>USDT</h3>
              <img src={preset} alt='' width={'4px'} />
              </div>
            </div>
            <div className='border'></div>

            <div className='receivee'>Payment Channel</div>

            <div className='transak'>
              <div className='transak-'>
                <h2>Transsak</h2>
                <h5>30 - 1.500 USD</h5>
              </div>
              <div className='transak--'>1.01 USD/USDT</div>
            </div>

            <div className='transakk'>
              <div className='transakk-'>
                <h2>Banxa</h2>
                <h5>30 - 1.500 USD</h5>
              </div>
              <div className='transakk--'>1.01 USD/USDT</div>
            </div>

            <div className='transakk'>
              <div className='transakk-'>
                <h2>Mercuryo</h2>
                <h5>30 - 1.500 USD</h5>
              </div>
              <div className='transakk--'>1.01 USD/USDT</div>
            </div>

            <div className='order-button'>
              Order Now
            </div>

          </div>
          
          </>
        )}


    </div>
  )
}

export default Deposit
