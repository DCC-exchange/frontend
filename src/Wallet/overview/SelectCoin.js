import React, { useState } from 'react'
import '../overview/styles/selectcoin.css'
import search from '../../images/nwimage/search.png'
import ussdt from '../../images/nwimage/ussdt.svg'
import btc from '../../images/nwimage/btc.svg'
import eth from '../../images/nwimage/eth.png'
import xrp from '../../images/nwimage/xrp.png'

const SelectCoin = ({clear}) => {
  const [searchTearm, setSearchTearm] = useState('')

  const handleSearch = (e) => {
    setSearchTearm(e.target.value)
  }
  const handleGoBack = (()=>{
    clear()
})
  return (
    <div className='select-coin-main'>
      <div className='search-div'>
        <div className='search-input'>
          <img src={search} alt='' width={'14px'} />
          <input
          type='text'
          placeholder='Enter Keyword'
          value={searchTearm}
          onChange={handleSearch}
          />
        </div>
        <div className='cancel' onClick={handleGoBack}>Cancel</div>
      </div>

      <div className='search-history'>Search History</div>

      <div className='btn-usdt-eth'>
        <div>USDT</div>
        <div>ETH</div>
      </div>

      <div className='coin-list'>Coin List</div>
      <div className='list-of-coins'>
        <img src={ussdt} alt='' width={'20px'} />
        <h3>USDT</h3>
      </div>
      <div className='list-of-coins'>
        <img src={btc} alt='' width={'20px'} />
        <h3>BTC</h3>
      </div>
      <div className='list-of-coins'>
        <img src={eth} alt='' width={'20px'} />
        <h3>ETH</h3>
      </div>
      <div className='list-of-coins'>
        <img src={xrp} alt='' width={'20px'} />
        <h3>XRP</h3>
      </div>
    </div>
  )
}

export default SelectCoin
