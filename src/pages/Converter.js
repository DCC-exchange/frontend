import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style/converter.module.css";
import { NavLink } from "react-router-dom";
import notify from "../images/notify dcc.svg";
import contact from "../images/conatct dcc.svg";
import Btc from "../images/Bitcoin.svg";
import Chart1 from "../images/chart1.svg";
import Chart2 from "../images/chart2.svg";
import Chart3 from "../images/chart3.svg";
import Chart4 from "../images/chart4.svg";
import Etherum from "../images/etherum.svg";
import Swap from '../images/swap.svg'
import coinAave from "../images/Aave.svg";
import coinxpr from "../images/coinxpr.svg";
import Grid from '@mui/material/Grid'
import MarketBanner from "../components/MarketBanner";


export default function Converter() {
  const [bitcoin, setBitcoin] = useState("");
  const [ethcoin, setEthcoin] = useState("");
  const [aavecoin, setAavecoin] = useState("");
  const [xrpcoin, setXrpcoin] = useState("");
  const [chat, setChat] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionOne, setSelectedOptionOne] = useState("");
  const [, setData] = useState("");
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )


  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        )
        .then((res) => {
          setData(res.data);
          setBitcoin(res.data[0]);
          setEthcoin(res.data[1]);
          setAavecoin(res.data[17]);
          setXrpcoin(res.data[5]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
    return () => clearInterval(interval);
  });

  const priceChange = bitcoin.price_change_percentage_24h;

  // Set the color based on the value of priceChange
  const color = priceChange < 0 ? "red" : "green";


  // this is for notifictions
  let notification = [4, 4, 3, 4, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3];


  const options = [
    { value: "btc", label: "BTC" },
    { value: "eth", label: "Ethereum" },
    { value: "ltc", label: "LTC" },
    { value: "doge", label: "DOGE" },
    { value: "ltc", label: "LTC" },
    { value: "ltc", label: "LTC" },
  ];
  const options1 = [
    { value: "btc", label: "BTC" },
    { value: "eth", label: "Ethereum" },
    { value: "ltc", label: "LTC" },
    { value: "doge", label: "DOGE" },
    { value: "ltc", label: "LTC" },
    { value: "ltc", label: "LTC" },
  ];

  const Select = ({ options, onChange, value }) => {
    return (
      <select onChange={onChange} value={value} className={styles.seletInput}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };



  return (
    <main className={styles["convert-display"]}>
      <div>
        {matches && ("")}
        {!matches && (
          <div className="home-top-flex">
            <div className="home-top-flex1">
              <div className="login">
                <NavLink to="/login">Log in</NavLink>
              </div>
              <div className="signup">
                <NavLink to="/signup">Sign up </NavLink>
              </div>
            </div>
            <div className="home-top-flex2">
              <NavLink>
                <img onClick={() => setChat(!chat)} src={contact} alt="contact" />
              </NavLink>
              <NavLink to="/login">
                <div className="notification-count">
                  <img src={notify} alt="Profile logo" />
                  <div className="notification-count-num">
                    <h3>{notification.length}</h3>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <section>
        <MarketBanner
          coinsBtc={Btc}
          chartBtc={Chart1}
          coinsEth={Etherum}
          btcUsdt={"BTC/USDT"}
          EthUsdt={"ETH/USDT"}
          AaveUsdt={"AAVE/USDT"}
          chartAave={Chart3}
          chartEth={Chart2}
          coinsAave={coinAave}
          color={color}
          coinsxrp={coinxpr}
          xrpUsdt={"XRP/USDT"}
          chartxrp={Chart4}
          ethPrice={
            ethcoin ? numberFormat(ethcoin.current_price) : "1,674.14"
          }
          ethpriceUsd={
            ethcoin ? numberFormat(ethcoin.current_price) : "1,674.14"
          }
          btcPrice={
            bitcoin ? numberFormat(bitcoin.current_price) : "23,203.47"
          }
          btcpriceUsd={
            bitcoin ? numberFormat(bitcoin.current_price) : "23,203.47"
          }
          AavePrice={
            aavecoin ? numberFormat(aavecoin.current_price) : "0.020961"
          }
          AavepriceUsd={
            aavecoin ? numberFormat(aavecoin.current_price) : "0.020961"
          }
          xprPrice={xrpcoin ? numberFormat(aavecoin.current_price) : "0.0909"}
          xprpriceUsd={
            xrpcoin ? numberFormat(aavecoin.current_price) : "0.0909"
          }
          btcProfit={bitcoin ? bitcoin.price_change_percentage_24h : "+1.15%"}
          btcVolume={`volume ${bitcoin ? bitcoin.total_volume : "+1.15%"}`}
          AaveVolume={`volume  ${aavecoin ? aavecoin.total_volume : "0.020961"
            }`}
          AaveProfit={
            aavecoin ? aavecoin.price_change_percentage_24h : "0.020961"
          }
          EthProfit={
            ethcoin ? aavecoin.price_change_percentage_24h : "0.020961"
          }
          EhtVolume={`volume  ${ethcoin ? ethcoin.total_volume : "0.020961"}`}
          xrpProfit={xrpcoin ? xrpcoin.price_change_percentage_24h : "0.0909"}
          xrpVolume={`volume  ${xrpcoin ? xrpcoin.total_volume : "0.020961"}`}
        />
      </section>

      <section className={styles['card-information']}>
        <div className={styles.inputInformation}>
          <form action="">
            <div className={styles.content1}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <label htmlFor="">From</label>
                  <input type="text" placeholder="Enter Amount" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className={styles.btc}>Available 0.00000000 BTC </div>
                  <Select
                    label={'Available 0.00000000 BTC'}
                    options={options}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    value={selectedOption} />
                </Grid>
              </Grid>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              marginTop: '2%'

            }}>
              <img src={Swap} alt="swap imaginfo" />
            </div>

            <div className={styles.content2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <label htmlFor="">To</label>
                  <input type="text" placeholder="Enter Amount" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div style={{ marginTop: '30px' }}>
                    <Select
                      options={options1}
                      onChange={(e) => setSelectedOptionOne(e.target.value)}
                      value={selectedOptionOne} />
                  </div>

                </Grid>
              </Grid>
            </div>

            <Grid container spacing>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>
                    Convert
                  </button>
                </div>

              </Grid>
            </Grid>
          </form>
        </div>
      </section>
    </main>
  );
}











