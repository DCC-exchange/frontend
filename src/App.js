import { Route, Routes } from "react-router-dom";
import React from 'react';
// import Features from "./pages/Features";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Spot from "./pages/Spot";
import Wallet from "./pages/Wallet";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./components/Otp";
// import MarketSpot from "./pages/MarketSpot";
import Cookies from "./components/Cookies";
import Error from "./components/Error";
import dccLogo from "./images/dccLogo.svg";
import { useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/AuthContext";
import Hot from "./pages/Hot";
import Favourite from "./pages/Favourite";
import Gainers from "./pages/Gainers";
import BottomNav from "./components/BottomNav";
import MarketSpot from "./pages/MarketSpot";
import SignupVerificationPage from "./pages/SignupVerificationPage";






function App() {



  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);




  return (
<CookiesProvider>
<AuthContextProvider>
    <div className="App">
         {loading && (
          <div className="mobile-preloader">
            <div className="mobile-loader">
              <img src={dccLogo} alt="Profile logo" />
            </div>
          </div>
        )}
        <Cookies />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        {/* routes with the bottom navigation goes in here */}
        <Route element={<BottomNav />}>
        <Route path="index" element={<Home />}>
          <Route index element={<Hot />}/>
          <Route path="favourite" element={<Favourite />}/>
          <Route path="gainers" element={<Gainers />}/>
          <Route  path="hot" element={<Hot />}/>
        </Route>
        <Route path="market" element={<Market />}></Route>
        <Route path="spot" element={<Spot />}></Route>
        <Route path="marketspot" element={<MarketSpot />}></Route>
        <Route path="wallet" element={<Wallet />}></Route>
        </Route>
        {/* routes with the bottom navigation goes in here */}
        <Route path="Otp" element={<Otp />}></Route>
        <Route path="*" element={<Error />}></Route>
        
        {/* <Route path="features" element={<Features />}></Route> */}
        <Route path="wallet" element={<Wallet />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="resetPassword" element={<ResetPassword/>}></Route>

        <Route path="forgotPassword" element={<ForgotPassword />}></Route>
        {/* <Route path="features" element={<Features />}></Route> */}
        <Route path="wallet" element={<Wallet />}></Route>
        <Route path="spot" element={<Spot />} />

        <Route path="verify" element={<SignupVerificationPage />} />
        

      </Routes>
    </div>
  </AuthContextProvider>
  </CookiesProvider>
    
  );
}

export default App;
