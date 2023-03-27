import React, { useState } from 'react'
import '../pages/style/signup.css'
import addfoto from '../images/nwimage/addfoto.svg'
import { NavLink } from 'react-router-dom'


const countries = [
  {value: 'USA', label: 'United State'},
  {value: 'NIG', label: 'Nigeria'},
  {value: 'CAN', label: 'Canada'},
  {value: 'MEX', label: 'Mexico'},
]

const Signup = () => {

 

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState('')
  const [passportFile, setPassportFile] = useState(null)
  const [selectedCountry, setSelectedountry] = useState('')


 


  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }
  function handleCountry(e) {
    setCountry(e.target.value);
  }
  function handleDOB(e) {
    setDob(e.target.value);
  }
  function handlePassportFileChange(e) {
    setPassportFile(e.target.files[0])
  }
  function countrySelect(e){
    setSelectedountry(e.target.value)
  }


  return (
    <div className='signup-page'>
       <div className='verity-page'>
        <h3>Create An Account</h3>
      </div>
      <div className='img-add'>

        <img src={addfoto} alt='foto' className='addfoto'
        />

        <input
        type='file'
        id='passport-file'
        accept='.pdf,.jpg,.jpeg,.png'
        onChange={handlePassportFileChange}
        value={passportFile}
        >
        </input>

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
              value={fname}
              onChange={handleFname}
              placeholder=" " />
            </div>
            <div className='email'>
              <h3>Last name</h3>
            </div>

            <div className='input-login'>
              <input 
              type='text' 
              name='lname' 
              value={lname}
              onChange={handleLname}
              placeholder=" " />
            </div>
            <div className='email'>
              <h3>Country</h3>
            </div>

            <div className='input-login'>
              <select
              value={selectedCountry}
              onChange={countrySelect}
              className='country-select'
              >
                <option
                value=''
                >
                  
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}

              </select>

            </div>
            <div className='email'>
              <h3>Gender</h3>
            </div>

            <div className='input-login'>
              <select className='sel-input-options'>
                <option value="option1">male</option>
                <option value="option2">female</option>
              </select>
            </div>
            <div className='email'>
              <h3>Date Of Birth</h3>
            </div>

            <div className='input-login img-login'>
              <input 
              type='date' 
              name='date' 
              value={dob}
              onChange={handleDOB}
              placeholder=" " />
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
