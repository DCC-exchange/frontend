import React, { useState } from 'react'
import '../overview/styles/withdraw.css'
import Back from '../../images/nwimage/backarrow.svg'
import cal from '../../images/nwimage/cal.svg'
import preset from '../../images/nwimage/presset.png'
import inch from '../../images/nwimage/inch.svg'
import eye from '../../images/nwimage/eye.svg'

const Withdraw = ({clear}) => {

  const [addressUser, setAddressUser] = useState(0)

  const handleAddressUser = (index) => {
    setAddressUser(index)
  }

        const handleGoBack = (()=>{
            clear()
        })
  return (
    <div className='deposit-main'>
      <div className='deposit-top'>
        <div onClick={handleGoBack}><img src={Back} alt='' /></div>

        <div className='crypto-fiat'>
            <h2 onClick={() => handleAddressUser(0)}>Address</h2>
            <h3 onClick={() => handleAddressUser(1)}>DCC User</h3>
        </div>

        <div><img src={cal} alt='' width={'15px'} /></div>
      </div>
      <div className='line-div'></div>

      {addressUser === 0 && (
        <>
         <div className='deposit-sec'>
          <div className='img-usdt' id='innch'>
              <img src={inch} alt='' width={'18px'} />
              <h2>1INCH</h2>
          </div>
          <div className='img-select-coin'>
              <h2>Select Coin</h2>
              <img src={preset} alt='' width={'4px'} />
          </div>
        </div>
        <div className='line-div'></div>

        <div className='network- net-work'>Network</div>
        <div className='bep-btn'>BEP20[BSC]</div>

        <div className='network- net-workk'>Withdrawal Address</div>

        <div className='box-es'>
          <h3>Long press to paste</h3>
        </div>

        <div className='amount--div'>
          <h2>Amount</h2>
          <h3>24H Limit: 0.2BTC/0.2BTC</h3>
        </div>

        <div className='box-es'>
          <h3>Min. Withdrawal 0.5</h3>
          <h4>All</h4>
        </div>
        <div className='available'>Available : 0.000000 1INCH</div>


        <div className='network- n-etwork'>Fund Password</div>
        <div className='box-es'>
          <h3>Long press to paste</h3>
          <img src={eye} alt='' width={'19px'} />
        </div>

        <div className='fee-'>
          <div className='feee'>
            <h3>Fees</h3>
            <h4>Receive Amount</h4>
          </div>
          <div className='fee-val'>
            <h2>0.18 1INCH</h2>
            <h5>0 1INCH</h5>
          </div>
        </div>

        <div className='order-button orrder ordder'>
              Confirm
            </div>

            <div className='list-ul'>
              <ul>
                <li>The minimum deposit is 0USDT. Otherwise the deposit will fail.</li>
                <li>Deposit any other crypto except USDT to this address may result of loss funds</li>
                <li>Confirm the correct address, an incorrect address will not be able to deposit successfully.</li>
              </ul>
            </div>
        </>
      )}
      {addressUser === 1 && (
        <>

<div className='deposit-sec'>
          <div className='img-usdt' id='innch'>
              <img src={inch} alt='' width={'18px'} />
              <h2>1INCH</h2>
          </div>
          <div className='img-select-coin'>
              <h2>Select Coin</h2>
              <img src={preset} alt='' width={'4px'} />
          </div>
        </div>

         <div className='network- net-workk'>Recipient</div>

            <div className='box-es'>
              <h3>Enter Username</h3>
            </div>

            <div className='amount--div'>
              <h2>Amount</h2>
              <h3>Available Amount: 00</h3>
            </div>

            <div className='box-es'>
              <h3>0.36 - 10,000</h3>
              <h4>All</h4>
            </div>
            <div className='available'>Available : 0.000000 1INCH</div>


            <div className='network- n-etwork'>Fund Password</div>
            <div className='box-es'>
              <h3>Long press to paste</h3>
              <img src={eye} alt='' width={'19px'} />
            </div>

            <div className='fee-'>
              <div className='feee'>
                <h3>Fees</h3>
                <h4>Receive Amount</h4>
              </div>
              <div className='fee-val'>
                <h2>0.18 1INCH</h2>
                <h5>0 1INCH</h5>
              </div>
            </div>

            <div className='order-button orrder'>
                  Confirm
                </div>

                <div className='list-ul'>
                  <ul>
                    <li>Check the information carefully before transfer</li>
                    <li>Available transfer time is 9-21 SGT</li>
                  </ul>
                </div>
        </>
      )}
    </div>
  )
}

export default Withdraw
