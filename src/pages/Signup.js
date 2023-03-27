import React, { useState } from 'react'
import '../pages/style/signup.css'
// import addfoto from '../images/nwimage/addfoto.svg'
// import calender from '../images/nwimage/calender.svg'
import { NavLink } from 'react-router-dom'

const Signup = () => {

  const [value, setValue] = useState("");


  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className='signup-page'>
       <div className='verity-page'>
        <h3>Create An Account</h3>
      </div>
      <div className='img-add'>
        {/* <img src={addfoto} alt='foto' /> */}
      </div>

      <div className='swipe-login-signup'>
      <div className='login-slide'>
      <div className='email'>
              <h3>First name</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='fname' 
              value={value}
              onChange={handleValue}
              placeholder="fname" />
            </div>
            <div className='email'>
              <h3>Last name</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='lname' 
              value={value}
              onChange={handleValue}
              placeholder="lname" />
            </div>
            <div className='email'>
              <h3>Country</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='country' 
              value={value}
              onChange={handleValue}
              placeholder="Country" />
            </div>
            <div className='email'>
              <h3>Gender</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='gender' 
              value={value}
              onChange={handleValue}
              placeholder="gender" />
            </div>
            <div className='email'>
              <h3>Date Of Birth</h3>
            </div>

            <div className='input-login img-login'>
              <input 
              type='text' 
              name='date' 
              value={value}
              onChange={handleValue}
              placeholder="dd/mm/yyyy" />
              {/* <img src={calender} alt='' width={'20px'} /> */}
            </div>

           <NavLink to='/'>
           <div className='login-btn-div'>
           <button className='login-btn'>Sign Up</button>
           </div>
           </NavLink>

            </div>
            </div>
    </div>
  )
}

export default Signup






























// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./style/signup.css";
// import arrow from "../images/arrow back dcc.svg";
// import eye from "../images/eye dcc.svg";
// import { useSignup } from "../hooks/useSignup";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useState } from "react";
// import ProfileSignUp from "../components/ProfileSignUp";




// export default function Signup() {
//   const { user } = useAuthContext();


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signup, isLoading, error } = useSignup();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup( email, password);
//   };








//   return (
//     <>
//     {user && <ProfileSignUp />}

//     {!user && (
//     <div className="signup-display">
//       <div className="signup-page-display"></div>
//       <div className="signup-display-cover">
//         <div className="signup-display-inner">
//           <div className="signup-display-top">
//             <div className="signup-top">
//                 <NavLink to="/">
//                     <img src={arrow} alt="arrow" width={"10px"} />
//                 </NavLink>
//             </div>
//             <h1>Create An Account</h1>
//           </div>

//           <div className="signup-top-flex">
//             <div className="signup-top-flex1">
//               <NavLink to="/login">
//                 <h3>Log in</h3>
//               </NavLink>
//             </div>
//             <div className="signup-top-flex2">
//               <NavLink to="/signup">
//                 <h3>Sign up Now</h3>
//               </NavLink>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="signup-main">
//               <div className="signup-main-email">
//                 <label>Email</label>
//                 <input     type="email"
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   required />
//               </div>
//               <div className="signup-main-password">
//                 <label>Create Password</label>
//                 <input   type="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password}
//                   required />
//                 <img src={eye} alt="eye" width={"20px"} />
//               </div>
//             </div>

//             <div className="signup-main-btn">
//               <button disabled={isLoading} type="submit">Sign up</button>
//             </div>
//             {error && <div className="error">{error}</div>}
//           </form>
//         </div>
//       </div>

//       <div className="signup-page-display2"></div>
//     </div>
//     )}
//    </>
//   );
// }
