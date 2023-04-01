import React, { useState } from 'react'
import '../overview/styles/transfer.css'
import Back from '../../images/nwimage/backarrow.svg'
import cal from '../../images/nwimage/cal.svg'
import preset from '../../images/nwimage/presset.png'
import usdtb from '../../images/nwimage/usdtb.svg'
import TransferSelect from './TransferSelect'

const Transfer = ({clear}) => {

  const [selectCoin, setSelectCoin] = useState(false)

        const handleGoBack = (()=>{
            clear()
        })
        function handleSelectCoin(e){
          if(e === 0){
            setSelectCoin(<TransferSelect clear={clear} />)
        }
      }
  return (
    <div className='deposit-main'>
       <div className='deposit-top'>
        <div onClick={handleGoBack}><img src={Back} alt='' /></div>

        <div className='crypto-fiat transferf'>
            <h2>Transfer</h2>
        </div>

        <div><img src={cal} alt='' width={'15px'} /></div>
      </div>


      <div className='first-boxx'>
        <div className='first-box-left'>
          <ul className='up-list'>
            <li>from</li>
          </ul>
          <ul className='below-list'>
            <li>to</li>
          </ul>
        </div>
        <div className='first-box-right'>
          <div className='first-b-spot'>
            <h3 onClick={() => handleSelectCoin(0)}>Spot</h3>
            <img src={preset} alt='' width={'5px'} />
          </div>
          <div className='below-b-spot'>
            <h3>Lite Contracts</h3>
            <img src={preset} alt='' width={'5px'} />
          </div>
        </div>
      </div>

      <div className='box-box'>
        <img src={usdtb} alt='' width={'15px'} />
        <h3>USDT</h3>
      </div>

      <div className='amant'>Amount</div>

      <div className='mass-x'>
        <div className='mass-inner'>
          <div className='mass-amant'>Amount</div>
          <div className='Max-'>Max</div>
        </div>
      </div>

      <div className='avail-digit'>
        <h3>Available</h3>
        <h4>0.000 USDT</h4>
      </div>

      <div className='mass-btn'>Transfer</div>

      {selectCoin}
    </div>
  )
}

export default Transfer
