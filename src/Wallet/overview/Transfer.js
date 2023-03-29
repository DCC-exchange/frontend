import React from 'react'
import '../overview/styles/transfer.css'

const Transfer = ({clear}) => {

        const handleGoBack = (()=>{
            clear()
        })
  return (
    <div onClick={handleGoBack} className='transfer-main'>
      <h1>hi</h1>
    </div>
  )
}

export default Transfer
