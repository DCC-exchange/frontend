import React from 'react'
import '../totalAssets/styles/assetsrec.css'
import eye from '../../images/nwimage/eye.svg'
import cal from '../../images/nwimage/cal.svg'

const AssetsRec = () => {
  return (
    <div className='assets-rec'>
      <div className='assets-first'>
        <h2>Total Assets [UDST]</h2>
        <img src={eye} alt='' width={'18px'} className='eye-img-' />
        <img src={cal} alt='' width={'14px'} className='cal-img-' />
      </div>
      <div className='assets-secnd'>
        <h1>0:00 </h1>
        <h3> = $ 00:00</h3>
      </div>
      <div className='select-div'>
        <button className='btn-first'>Deposit</button>
        <button className='btn-secnd'>Withdraw</button>
        <button className='btn-third'>Transfer</button>
      </div>
    </div>
  )
}

export default AssetsRec
