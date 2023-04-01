import React from 'react'
import '../overview/styles/transferselect.css'
import back from '../../images/nwimage/backarrow.svg'
import spot from '../../images/nwimage/spot.svg'
import usdt from '../../images/nwimage/usdt.svg'
import coin from '../../images/nwimage/coin.svg'
import lite from '../../images/nwimage/lite.svg'

const TransferSelect = () => {
  return (
    <div className='transfer-select-main'>
      <div className='t-s-top'>
        <img src={back} alt='' width={'18px'} />
        <h3>Select a wallet</h3>
      </div>

      <div className='list-of-coinss'>
        <img src={spot} alt='' width={'20px'} />
        <h3>Spot</h3>
      </div>
      <div className='list-of-coinss'>
        <img src={usdt} alt='' width={'20px'} />
        <h3>USDT-M</h3>
      </div>
      <div className='list-of-coinss'>
        <img src={coin} alt='' width={'20px'} />
        <h3>COIN-M</h3>
      </div><div className='list-of-coinss'>
        <img src={lite} alt='' width={'20px'} />
        <h3>Lite Contracts</h3>
      </div>

    </div>
  )
}

export default TransferSelect
