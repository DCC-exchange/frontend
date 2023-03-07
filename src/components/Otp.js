import React, { useEffect, useState } from 'react'
import "./styles/otp.css";


export default function Otp() {
    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

        useEffect(() => {
    const interval = setInterval(() => {
        if (seconds > 0) {
        setSeconds(seconds - 1);
        }

        if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(interval);
        } else {
            setSeconds(59);
            setMinutes(minutes - 1);
        }
        }
    }, 1000);

    return () => {
        clearInterval(interval);
    };
    }, [seconds]);


    const resendOTP = () => {
  setMinutes(1);
  setSeconds(30);
};
 


  return (
    <div className='otp_header'>
        <div className="otp_center">
            <div className="create_acount">
                <h3>Create An Account</h3>
            </div>
            <div className="email_texting">
                <p><span className='email_text'>blesseddon321@yahoo.com </span>Enter the <br />
                 verification OTP sent to your email <br />
                to confirm your email address.</p>
            </div>
                    <div className="input_box">                 
                         <input
                            value={otp}
                            onChange={({ target }) => {
                                setOtp(target.value);
                            }}
                            />
                    </div>

          
            <div className="email_verify_flex">
                <div className="email_verification">
                    <h5>Email Verification</h5>
                </div>
                <div className="email_expires">
                          {seconds > 0 || minutes > 0 ? (
                            <p>
                            Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                            {seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                        ) : (
                            <p>Didn't recieve code?</p>
                        )}

                           <button
                            disabled={seconds > 0 || minutes > 0}
                            style={{
                            color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                            }}
                            onClick={resendOTP}
                            className="resent_button"
                        >
                            Resend otp
                        </button>
                </div>
            </div>
            <div className="submit_button">
                <button type='submit'>Continue</button>
            </div>
        </div>
    </div>
  )
}
