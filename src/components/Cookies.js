import React from "react";
import { useState, useEffect } from "react";
import "./styles/Cookies.css";



export default function Cookies() {
  const [showBanner, setShowBanner] = useState(true);
   
  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setShowBanner(JSON.parse(data));
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  
  return (
    <>
          {showBanner  && (<div id="cookies-header">       
            <h3>Accept Cookies</h3>
            <p className="cookies-p">We use cookies and similar technology to personalize contents, 
            tailor and measure ads, and provide a better experience. By clicking accept you 
            accept to this, as a outline to our cookie policy.</p>
           <button id="cookies-button" onClick={() => setShowBanner(false)}>Accept</button>
         </div>)}
    </>
  );
}



