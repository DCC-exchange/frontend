import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ltvs.css";
// Ltvs trade icon
import arrow from "../../../images/dcc arrows.svg";
import chart from "../../../images/dcc graph.svg";
import dot from "../../../images/dcc star.svg";
import circle from "../../../images/roundpink.svg";
import dataimg from "../../../images/data dcc.svg";
import twoSide from "../../../images/twoside.svg";
import Order from "../../../images/Orders.svg";
import Box from "../../../images/box.svg";
import deccbox from "../../../images/dcc box.svg";

export default function SpotTrade() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState("buy");
    const [selectedOption, setSelectedOption] = useState("");
    const [data, setData] = useState([
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
    ]);

    const [gainData, setGaindata] = useState([
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
        {
            current_price: "17.23",
            total_volume: "60,3542.52",
        },
    ]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleChangeButton = (bgcolor) => {
        setActiveButton(bgcolor);
    };

    const options = [
        { value: "limit", label: "Limit" },
        { value: "market", label: "Market" },
        { value: "buyer limit", label: "Buyer Limit" },
    ];

    const Select = ({ options, onChange, value }) => {
        return (
            <select onChange={onChange} value={value} className="spot-trade-select">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
                )
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);

                    setData(
                        res.data
                            .filter((coin) => coin.price_change_percentage_24h < -0)
                            .map((coin) => {
                                return {
                                    current_price: coin.current_price,
                                    total_volume: coin.total_volume,
                                };
                            })
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
                )
                .then((res) => {
                    console.log(res.data, "new none");
                    setGaindata(
                        res.data
                            .filter((coin) => coin.price_change_percentage_24h > 0)
                            .map((coin) => {
                                return {
                                    current_price: coin.current_price,
                                    total_volume: coin.total_volume,
                                };
                            })
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className="spot-main-sport-trade">
                <div className="spot-trade-display-main-top-flex">
                    <div className="spot-trade-display-main-top-flex1">
                        <img src={arrow} alt="arrow" width={"20px"} />
                        <h1>BTC/USDT</h1>
                        <h2>+1.71%</h2>
                    </div>
                    <div className="spot-trade-display-main-top-flex2">
                        <img src={chart} alt="chart" width={"15px"} />
                        <img src={dot} alt="dot" width={"20px"} />
                    </div>
                </div>
                <div className="spot-tade-display-main-body-flex">
                    <div className="spot-trade-display-main-body-flex1">
                        <div style={{ display: "flex", gap: 5 }}>
                            <button
                                onClick={() => {
                                    handleTabClick(0);
                                    handleChangeButton("buy");
                                }}
                                style={{
                                    backgroundColor: activeButton === "buy" ? "green" : "grey",
                                }}
                                className={`spot-tab-button`}
                            >
                                Buy
                            </button>
                            <button
                                onClick={() => {
                                    handleTabClick(1);
                                    handleChangeButton("sell");
                                }}
                                style={{
                                    backgroundColor: activeButton === "sell" ? "red" : "grey",
                                }}
                                className={`spot-tab-button`}
                            >
                                Sell
                            </button>
                        </div>

                        <div className="spot-trade-buy-sell">
                            {activeTab === 0 && (
                                <>
                                    <div className="spot-tab-buy">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <div style={{ display: "flex", gap: 2 }}>
                                                <h4>Avalable</h4>
                                                <img src={circle} alt="circle icons" />
                                            </div>
                                            <div style={{ display: "flex", gap: 2 }}>
                                                <p>0{""} USDT</p>
                                                <img src={twoSide} alt="two side icon" />
                                            </div>
                                        </div>
                                        <form action="">
                                            <div>
                                                <Select
                                                    options={options}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                    value={selectedOption}
                                                />
                                            </div>

                                            <div style={{ marginTop: "2rem" }}>
                                                <div className="spot-tab-buy-input1">
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-1"
                                                    >
                                                        <button>-</button>
                                                        <div className="vertical-div"></div>
                                                    </div>
                                                    <input type="number" placeholder="17.06" />
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-2"
                                                    >
                                                        <div className="vertical-div"></div>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                                <div className="spot-tab-buy-input2">
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-1"
                                                    >
                                                        <button>-</button>
                                                        <div className="vertical-div"></div>
                                                    </div>

                                                    <input type="number" placeholder="Amount" />
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-2"
                                                    >
                                                        <div className="vertical-div"></div>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ marginTop: "2rem" }}>
                                                <button className="sport-trade-buy-ens">Buy ENS</button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                            )}
                            {activeTab === 1 && (
                                <>
                                    <div className="spot-tab-sell">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <div style={{ display: "flex", gap: 2 }}>
                                                <h4>Avalable</h4>
                                                <img src={circle} alt="circle icons" />
                                            </div>
                                            <div style={{ display: "flex", gap: 2 }}>
                                                <p>0{""} USDT</p>
                                                <img src={twoSide} alt="two side icon" />
                                            </div>
                                        </div>
                                        <form action="">
                                            <Select
                                                options={options}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                                value={selectedOption}
                                            />
                                            <div style={{ marginTop: "2rem" }}>
                                                <div className="spot-tab-buy-input1">
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-1"
                                                    >
                                                        <button>-</button>
                                                        <div className="vertical-div"></div>
                                                    </div>
                                                    <input type="number" placeholder="17.06" />
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-2"
                                                    >
                                                        <div className="vertical-div"></div>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                                <div className="spot-tab-buy-input2">
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-1"
                                                    >
                                                        <button>-</button>
                                                        <div className="vertical-div"></div>
                                                    </div>

                                                    <input type="number" placeholder="Amount" />
                                                    <div
                                                        style={{ display: "flex", gap: 5 }}
                                                        className="spot-tab-position-2"
                                                    >
                                                        <div className="vertical-div"></div>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ marginTop: "2rem" }}>
                                                <button className="sport-trade-sell-ens">
                                                    Sell ENS
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="spot-trade-display-main-body-flex2">
                        <div className="spot-trade-content-heaeder-flext-2-A">
                            <h3>Price</h3>
                            <h3>Amount</h3>
                        </div>
                        {data &&
                            data.slice(0, 6).map((data) => (
                                <div className="spot-trade-content-body-flext-2-A">
                                    <span>-{data.current_price}</span>
                                    <span>{data.total_volume}</span>
                                </div>
                            ))}
                        <div>
                            <div className="spot-trade-display-amount">
                                <h3>17.23</h3>
                                <h4>=17.23</h4>
                            </div>
                            {gainData &&
                                gainData.slice(0, 6).map((data) => (
                                    <div className="spot-trade-content-body-flext-2-b">
                                        <span>+{data.current_price}</span>
                                        <span>{data.total_volume}</span>
                                    </div>
                                ))}
                        </div>
                        <div className="spot-trade-content-body-bottom">
                            <button>0.01</button>
                            <img src={deccbox} alt="dcc box" />
                        </div>
                    </div>
                </div>

                {/* bottom line */}
                <div className="spot-bottom-line-flex">
                    <img src={Order} alt="order toxt" />
                    <img src={Box} alt="box" />
                </div>
                <div className="spot-bottom-horizontal-line"></div>

                <div className="futures-display-main-page-data">
                    <img src={dataimg} alt="data" width={"60px"} />
                    <h1>No Data Yet!!!</h1>
                </div>
            </div>
        </>
    );
}