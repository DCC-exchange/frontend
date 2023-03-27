import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Back from '../images/nwimage/backarrow.svg'
// import eye from '../images/nwimage/eye.svg'

const Login = () => {

  const [loginSignup, setLoginSignup] = useState(0)
  const [valueLogin, setValueLogin] = useState("");
  const [valueLoginp, setValueLoginp] = useState("");
  const [username, setUsername] = useState("");

  

  function handleLogin(index){
    setLoginSignup(index)
  }
  function handleValue(e) {
    setValueLogin(e.target.value);
  }
  function handleValuep(e) {
    setValueLoginp(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div className='login-page'>
      <div className='login-page-inner'>

      <NavLink to='/'>
      <div className='arrow'>
        {/* <img src={Back} alt='arrow'  /> */}
      </div>
      </NavLink>
      <div className='welcome'>
        <h3>Welcome Back</h3>
      </div>

      <div className='login-signup'>
        <div className='login-link'>
          <div onClick={() => handleLogin(0)}
          className={`login ${loginSignup === 0 ? 'active' : ""}`}
          >
            Log In
          </div>
        </div>
        <div className='signup-link'>
          <div
          onClick={() => handleLogin(1)}
          className={`login ${loginSignup === 1 ? 'active' : ""}`}
          >
          Sign Up Now
          </div>
        </div>
      </div>

      <div className='swipe-login-signup'>

      {
        loginSignup === 0 && (
          <>
          <div className='login-slide'>
            <div className='email'>
              <h3>Email</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='email' 
              value={valueLogin}
              onChange={handleValue}
              placeholder="email" />
            </div>

            <div className='email'>
              <h3>Password</h3>
            </div>

            <div className='input-login'>
              <input 
              type='password' 
              name='password' 
              value={valueLoginp}
              onChange={handleValuep}
              placeholder="password" />
              {/* <img src={eye} alt='' width={'10px'} /> */}
            </div>

            <div className='forgot-pas'>
              <h3>Forgot Password?</h3>
            </div>

            <NavLink to='/'>
            <div className='login-btn-div'>
           <button className='login-btn'>Log In</button>
           </div>
            </NavLink>

           <div className='login-or'>
            <h1>OR</h1>
            <h4>Login with Google</h4>
           </div>


          </div>
          </>
        )
      }

{
        loginSignup === 1 && (
          <>
          <div className='login-slide'>
            <div className='email'>
              <h3>Username</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='name' 
              value={username}
              onChange={handleUsername}
              placeholder="username" />
            </div>

            <div className='email'>
              <h3>Email</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='email' 
              value={valueLogin}
              onChange={handleValue}
              placeholder="email" />
            </div>

            <div className='email'>
              <h3>Password</h3>
            </div>

            <div className='input-login'>
              <input 
              type='password' 
              name='password' 
              value={valueLoginp}
              onChange={handleValuep}
              placeholder="password" />
              {/* <img src={eye} alt='' width={'10px'} /> */}
            </div>

            <div className='forgot-pas'>
              <h3>Forgot Password?</h3>
            </div>

           <NavLink to='/verify'>
           <div className='login-btn-div'>
           <button className='login-btn'>Continue</button>
           </div>
           </NavLink>

           <div className='login-or'>
            <h1>OR</h1>
            <h4>Login with Google</h4>
           </div>


          </div>
          </>
        )
      }

      </div>

      
         




      </div>
    </div>
  )
}

export default Login