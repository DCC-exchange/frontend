import React, { useState } from 'react'
import '../totalAssets/styles/assetsrec.css'
import eye from '../../images/nwimage/eye.svg'
import cal from '../../images/nwimage/cal.svg'
import Deposit from '../overview/Deposit'
import Withdraw from '../overview/Withdraw'
import Transfer from '../overview/Transfer'

const AssetsRec = () => {

  const [switchButton, setSwitchButton] = useState(false)

  const clear = (()=>{
    setSwitchButton(false)
  })

  function handleButton(e){
    if(e === 0){
      setSwitchButton(<Deposit clear={clear} />)
    }else if (e === 1){
      setSwitchButton(<Withdraw clear={clear} />)
    }else{
      setSwitchButton(<Transfer clear={clear} />)
    }
  }

 

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
        <button className='btn-first' onClick={() => handleButton(0)}>Deposit</button>
        <button className='btn-secnd' onClick={() => handleButton(1)}>Withdraw</button>
        <button className='btn-third' onClick={() => handleButton(2)}>Transfer</button>
      </div>

      { switchButton }
    </div>
  )
}

export default AssetsRec
