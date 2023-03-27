import React from 'react'
import { NavLink } from 'react-router-dom'
import '../pages/style/signupverification.css'

const SignupVerificationPage = () => {
  return (
    <div className='verification-page'>
      <div className='verity-page'>
        <h3>Create An Account</h3>
      </div>

      <div className='verify-image'>
        <div>
            <span>example@gmail.com </span>
            Enter the verification OTP sent to your email to confirm your email address.
        </div>
      </div>  

      <div className='otp-code-div'>
      <div className='otp-code'>
        <input type='text' />
      </div>
      <div className='otp-code'>
        <input type='text' />
      </div>
      <div className='otp-code'>
        <input type='text' />
      </div>
      <div className='otp-code'>
        <input type='text' />
      </div>
      <div className='otp-code'>
        <input type='text' />
      </div>
      <div className='otp-code'>
        <input type='text' />
      </div>

      </div>

      <div className='vverify'>
        <h2>Email verification</h2>
        <h3>(90s)</h3>
      </div>
            <br></br><br></br>
      <NavLink to='/signup'>
      <div className='login-btn-div'>
           <button className='login-btn'>Continue</button>
      </div>
      </NavLink>
     

    </div>
  )
}

export default SignupVerificationPage
