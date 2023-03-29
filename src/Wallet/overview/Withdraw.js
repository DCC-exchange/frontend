import React from 'react'
import '../overview/styles/withdraw.css'

const Withdraw = ({clear}) => {

        const handleGoBack = (()=>{
            clear()
        })
  return (
    <div onClick={handleGoBack} className='withdraw-main'>
      <h1>how are you</h1>
    </div>
  )
}

export default Withdraw
