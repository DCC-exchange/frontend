import React from "react";
import "./style/wallet.css";
import logo from "../images/wallet profile.svg";
import arrow from "../images/arrow back dcc.svg";
import wallet from "../images/wallet purse.svg";
import dots from "../images/dots dcc.svg";
import { NavLink } from "react-router-dom";

export default function Wallet() {
  const History = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const wallets = [
    {
      amount: "$23.23",
      address: "0x3531062d74A67i6341A5eB4db87161F3CaF3CA8326d ",
      coin: "USDT",
    },
    {
      amount: "$30.23",
      address: "0x3531062d74A674671A5eB4db87161F3CaF3CA8326d ",
      coin: "ETH",
    },
    {
      amount: "$13.23",
      address: "0x3531062d74A6341A5eB4db87161F3CaF3CA8326d ",
      coin: "AVAX",
    },
    {
      amount: "$500.23",
      address: "0x3531062d74A5761A5eB4db87161F3CaF3CA8326d ",
      coin: "NEAR",
    },
  ];

  const username = "Joy";

  const balance = "8,582";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  return (
    <div className="wallet-display">
      <div className="wallet-page-display"></div>
      <div className="wallet-cover">
        <div className="wallet-top">
          <img
            className="wallet-top-img"
            onClick={History}
            src={arrow}
            alt="arrow"
            width={"10px"}
          />
          <div className="wallet-top-flex">
            <h3>Hi, {username}</h3>
            <img src={logo} alt="logo" width={"50px"} />
          </div>
        </div>

        <div className="wallet-main">
          <div className="wallet-main-inner-flex">
            <div className="wallet-main-inner-flex1">
              <img src={dots} alt="dots" width={"30px"} />
              <div className="wallet-main-inner-text">
                <h3>Available Balance</h3>
                <h1>${balance}</h1>
              </div>
              <NavLink to="/">
                <h3>Deposit</h3>
              </NavLink>
            </div>
            <div className="wallet-main-inner-flex2">
              <img
                className="wallet-main-image"
                src={wallet}
                alt="wallet"
                width={"180px"}
              />
              <img
                className="wallet-main-image-second"
                src={logo}
                alt="logo"
                width={"80px"}
              />
            </div>
          </div>
        </div>

        <div className="wallet-transaction">
          <h3>Transaction</h3>
        </div>

        <table className="weekly-table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Wallet ID</th>
              <th>Coin</th>
              <th>Date</th>
            </tr>
          </thead>

          {wallets &&
            wallets.map((wallet) => (
              <tbody>
                <tr>
                  <td>{wallet.amount}</td>
                  <td>{wallet.address}</td>
                  <td>{wallet.coin}</td>
                  <td>{currentDate}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}
























// import React from "react";
// import "./style/wallet.css";
// import logo from "../images/wallet profile.svg";
// import arrow from "../images/arrow back dcc.svg";
// import wallet from "../images/wallet purse.svg";
// import dots from "../images/dots dcc.svg";


// export default function Wallet() {
//   const History = (e) => {
//     e.preventDefault();
//     window.history.back();
//   };
//   return (
//     <div className="wallet-display">
//       <div className="wallet-page-display"></div>
//       <div className="wallet-cover">
//         <div className="wallet-top">
//           <img
//             className="wallet-top-img"
//             onClick={History}
//             src={arrow}
//             alt="arrow"
//             width={"10px"}
//           />
//           <div className="wallet-top-flex">
//             <h3>Hi, Joy</h3>
//             <img src={logo} alt="logo" width={"50px"} />
//           </div>
//         </div>

//         <div className="wallet-main">
//           <div className="wallet-main-inner-flex">
//             <div className="wallet-main-inner-flex1">
//               <img src={dots} alt="dots" width={"30px"} />
//               <div className="wallet-main-inner-text">
//                 <h3>Available Balance</h3>
//                 <h1>$10,000</h1>
//               </div>
//               <button>Deposit</button>
//             </div>
//             <div className="wallet-main-inner-flex2">
//               <img src={wallet} alt="wallet" width={"180px"} />
//             </div>
//           </div>
//         </div>

//         <div className="wallet-transaction">
//           <h3>Transaction</h3>
//         </div>

//         <div className="wallet-History-flex">
//           <div className="wallet-History-flex1">
//             <h3>&#10009;</h3>
//             <h2>$200</h2>
//           </div>
//           <div className="wallet-History-flex2">
//             <h3>26738g763286w6tg38g8d2tdg2d</h3>
//           </div>
//           <div className="wallet-History-flex3">
//             <h3>USDT</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
