import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './desktop.module.css';
import stars from '../../../images/stars.svg';

import {
    Table,
    TableBody,
    Grid,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,

} from '@mui/material'
import Box1 from '../../../images/box1.svg'
import Box2 from '../../../images/box2.svg'
import Box3 from '../../../images/box3.svg'
import SpotData from '../../../components/SpotDate';

let tvScriptLoadingPromise;

const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);


export default function SpotTrade() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeFormTab, setActiveFormTab] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setGain] = useState([]);
    const [loses, setLoses] = useState([])
    const [cryptoList, setCryptoList] = useState([]);
    const onLoadScriptRef = useRef();


    useEffect(() => {
        onLoadScriptRef.current = createWidget;
        if (!tvScriptLoadingPromise) {
            tvScriptLoadingPromise = new Promise((resolve) => {
                const script = document.createElement("script");
                script.id = "tradingview-widget-loading-script";
                script.src = "https://s3.tradingview.com/tv.js";
                script.type = "text/javascript";
                script.onload = resolve;

                document.head.appendChild(script);
            });
        }

        tvScriptLoadingPromise.then(
            () => onLoadScriptRef.current && onLoadScriptRef.current()
        );

        return () => (onLoadScriptRef.current = null);

        function createWidget() {
            if (
                document.getElementById("tradingview_677f7") &&
                "TradingView" in window
            ) {
                new window.TradingView.widget({
                    height: '680px',
                    width: '100%',
                    symbol: "BINANCE:BTCUSDT",
                    interval: "D",
                    timezone: "Etc/UTC",
                    theme: "dark",
                    color: '#725F7D4D',
                    style: "1",
                    locale: "en",
                    toolbar_bg: "#f1f3f6",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_677f7",
                });
            }
        }
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
                )
                .then((res) => {
                    setCryptoList(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);
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
                    setGain(
                        res.data
                            .filter((coin) => coin.price_change_percentage_24h > 0)
                            .map((coin) => {
                                return {
                                    current_price: coin.current_price,
                                    total_volume: coin.total_volume,
                                    total_supply: coin.total_supply

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

    // this is th show loses
    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
                )
                .then((res) => {

                    setLoses(
                        res.data
                            .filter((coin) => coin.price_change_percentage_24h < 0)
                            .map((coin) => {
                                return {
                                    current_price: coin.current_price,
                                    total_volume: coin.total_volume,
                                    total_supply: coin.total_supply
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

    // this is a function to filter different kind of coin
    const searchRepos = (query) => {
        return cryptoList.filter((repo) => {
            return repo.name.toLowerCase().includes(query.toLowerCase());
        });
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleformTabClick = (index) => {
        setActiveFormTab(index)
    }
    return (
        <>
            <main className={styles['sport-trade-container']}>
                <section className={styles['main-container']}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div className={styles.topleft}>
                                <div className={styles['top-div-1']}>
                                    <button
                                        onClick={() => handleTabClick(0)}
                                        className={`${styles['spot-tab-button']} ${activeTab === 0 ? `${styles['active']}` : ""}`}
                                    >
                                        Favorites
                                    </button>
                                </div>


                                <div className={styles['top-div-2']}>
                                    <button
                                        onClick={() => handleTabClick(1)}
                                        className={`${styles['spot-tab-button']} ${activeTab === 1 ? `${styles['active']}` : ""}`}
                                    >
                                        USDT
                                    </button>

                                </div>

                                <div className={styles['top-div-3']}>
                                    <button
                                        onClick={() => handleTabClick(2)}
                                        className={` ${styles['spot-tab-button']} ${activeTab === 2 ? `${styles['active']}` : ""}`}
                                    >
                                        USDS
                                    </button>
                                </div>

                                <div className={styles['top-div-4']}>
                                    <button
                                        onClick={() => handleTabClick(3)}
                                        className={`${styles['spot-tab-button']} ${activeTab === 3 ? `${styles['active']}` : ""}`}
                                    >
                                        FIATs
                                    </button>

                                </div>
                            </div>

                            <div>
                                {activeTab === 0 && (
                                    <div className={styles['active-tab-main-container']}>
                                        <div className={styles.inputBox}>
                                            <input type="text"
                                                placeholder='Search'
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(e.target.value)} />
                                        </div>
                                        <div className={styles['active-tab-table']}>
                                            <TableContainer>
                                                <Table sx={{ background: 'none' }}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Name <img src={stars} alt="stars" /></TableCell>
                                                            <TableCell>Last Price <img src={stars} alt="stars" /></TableCell>
                                                            <TableCell>24H Change% <img src={stars} alt="stars" /></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {searchRepos(searchQuery)
                                                            .map((crypto) => (
                                                                <TableRow key={crypto.id}>
                                                                    <TableCell>
                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                                            <img src={crypto.image} alt="coin" style={{ height: '20px', width: '18.75px' }} /> :  {crypto.name}
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                                    <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{crypto.price_change_percentage_24h}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        </div>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div>
                                        <div className={styles['active-tab-main-container']}>
                                            <div className={styles.inputBox}>
                                                <input type="text"
                                                    placeholder='Search'
                                                    value={searchQuery}
                                                    onChange={(e) =>
                                                        setSearchQuery(e.target.value)} />
                                            </div>
                                            <div className={styles['active-tab-table']}>
                                                <TableContainer>
                                                    <Table sx={{ background: 'none' }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Name <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>Last Price <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>24H Change% <img src={stars} alt="stars" /></TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {searchRepos(searchQuery)
                                                                .map((crypto) => (
                                                                    <TableRow key={crypto.id}>
                                                                        <TableCell>
                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                                                <img src={crypto.image} alt="coin" style={{ height: '20px', width: '18.75px' }} /> :  {crypto.name}
                                                                            </div>
                                                                        </TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{crypto.price_change_percentage_24h}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>

                                            </div>
                                        </div>

                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div>
                                        <div className={styles['active-tab-main-container']}>
                                            <div className={styles.inputBox}>
                                                <input type="text"
                                                    placeholder='Search'
                                                    value={searchQuery}
                                                    onChange={(e) =>
                                                        setSearchQuery(e.target.value)} />
                                            </div>
                                            <div className={styles['active-tab-table']}>
                                                <TableContainer>
                                                    <Table sx={{ background: 'none' }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Name <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>Last Price <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>24H Change% <img src={stars} alt="stars" /></TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {searchRepos(searchQuery)
                                                                .map((crypto) => (
                                                                    <TableRow key={crypto.id}>
                                                                        <TableCell>
                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                                                <img src={crypto.image} alt="coin" style={{ height: '20px', width: '18.75px' }} /> :  {crypto.name}
                                                                            </div>
                                                                        </TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{crypto.price_change_percentage_24h}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div>
                                        <div className={styles['active-tab-main-container']}>
                                            <div className={styles.inputBox}>
                                                <input type="text"
                                                    placeholder='Search'
                                                    value={searchQuery}
                                                    onChange={(e) =>
                                                        setSearchQuery(e.target.value)} />
                                            </div>
                                            <div className={styles['active-tab-table']}>
                                                <TableContainer>
                                                    <Table sx={{ background: 'none' }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Name <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>Last Price <img src={stars} alt="stars" /></TableCell>
                                                                <TableCell>24H Change% <img src={stars} alt="stars" /></TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {searchRepos(searchQuery)
                                                                .map((crypto) => (
                                                                    <TableRow key={crypto.id}>
                                                                        <TableCell>
                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                                                <img src={crypto.image} alt="coin" style={{ height: '20px', width: '18.75px' }} /> :  {crypto.name}
                                                                            </div>
                                                                        </TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                                        <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{crypto.price_change_percentage_24h}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className={styles['sport-body-container']}>
                                <div className={styles['sport-body-content-header']}>

                                </div>
                                <div
                                    className={styles['tradingview-widget-container-info']}
                                >
                                    <div id="tradingview_677f7" />
                                </div>

                                <div className={styles.forminput}>
                                    <div className={styles.topleft}>
                                        <div className={styles['top-div-1']}>
                                            <button
                                                onClick={() => handleformTabClick(0)}
                                                className={`${styles['spot-tab-button']} ${activeFormTab === 0 ? `${styles['active']}` : ""}`}
                                            >
                                                Limit
                                            </button>
                                        </div>


                                        <div className={styles['top-div-2']}>
                                            <button
                                                onClick={() => handleformTabClick(1)}
                                                className={`${styles['spot-tab-button']} ${activeFormTab === 1 ? `${styles['active']}` : ""}`}
                                            >
                                                Market
                                            </button>

                                        </div>

                                    </div>
                                    {activeFormTab === 0 && (
                                        <div className={styles.formInputContainer}>
                                            <div style={{ margin: '2rem' }}>
                                                <Grid container spacing={4}>
                                                    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        <div style={{ marginTop: '1rem', margin: '10px 10px' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                                <div className={styles.btcform}>
                                                                    <span>Buy BTC</span>
                                                                </div>
                                                                <div className={styles.Available}>
                                                                    <span className={styles.spanInfo1}>Avail.: <span>0 BUSD</span> </span>
                                                                    <span className={styles.spanInfo3}>Deposit</span>
                                                                </div>
                                                            </div>

                                                            <div className={styles.mainForn}>
                                                                <form action="">
                                                                    <div className={styles.formInformation}>
                                                                        <span>Price:</span>
                                                                        <input type="text" placeholder='BUSD' />
                                                                    </div>

                                                                    <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                        <span>Amount:</span>
                                                                        <input type="text" placeholder='Enter' />
                                                                    </div>
                                                                    <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                        <span>Total::</span>
                                                                        <input type="text" placeholder='Enter' />
                                                                    </div>

                                                                    <button className={styles.butform}>
                                                                        Buy BTC
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        <div>
                                                            <div style={{ marginTop: '1rem', margin: '10px 10px' }}>
                                                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                                    <div className={styles.btcSell}>
                                                                        <span>Sell BTC</span>
                                                                    </div>
                                                                    <div className={styles.Available}>
                                                                        <span className={styles.spanInfo1}>Avail.: <span>0 BUSD</span> </span>
                                                                        <span className={styles.spanInfo3}>Deposit</span>
                                                                    </div>
                                                                </div>

                                                                <div className={styles.mainForn}>
                                                                    <form action="">
                                                                        <div className={styles.formInformation}>
                                                                            <span>Price:</span>
                                                                            <input type="text" placeholder='BUSD' />
                                                                        </div>

                                                                        <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                            <span>Amount:</span>
                                                                            <input type="text" placeholder='Enter' />
                                                                        </div>
                                                                        <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                            <span>Total::</span>
                                                                            <input type="text" placeholder='Enter' />
                                                                        </div>

                                                                        <button className={styles.butformSell}>
                                                                            Sell BTC
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </Grid>
                                                </Grid>

                                            </div>

                                        </div>
                                    )}
                                    {activeFormTab === 1 && (
                                        <div className={styles.formInputContainer}>
                                            <div style={{ margin: '2rem' }}>
                                                <Grid container spacing={4}>
                                                    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        <div style={{ marginTop: '1rem', margin: '10px 10px' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                                <div className={styles.btcform}>
                                                                    <span>Buy BTC</span>
                                                                </div>
                                                                <div className={styles.Available}>
                                                                    <span className={styles.spanInfo1}>Avail.: <span>0 BUSD</span> </span>
                                                                    <span className={styles.spanInfo3}>Deposit</span>
                                                                </div>
                                                            </div>

                                                            <div className={styles.mainForn}>
                                                                <form action="">
                                                                    <div className={styles.formInformation}>
                                                                        <span>Price:</span>
                                                                        <input type="text" placeholder='BUSD' />
                                                                    </div>

                                                                    <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                        <span>Amount:</span>
                                                                        <input type="text" placeholder='BTC' />
                                                                    </div>
                                                                    <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                        <span>Total::</span>
                                                                        <input type="text" placeholder='BTC' />
                                                                    </div>

                                                                    <button className={styles.butform}>
                                                                        Buy BTC
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        <div>

                                                            <div style={{ marginTop: '1rem', margin: '10px 10px' }}>
                                                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                                    <div className={styles.btcSell}>
                                                                        <span>Sell BTC</span>
                                                                    </div>
                                                                    <div className={styles.Available}>
                                                                        <span className={styles.spanInfo1}>Avail.: <span>0 BUSD</span> </span>
                                                                        <span className={styles.spanInfo3}>Deposit</span>
                                                                    </div>
                                                                </div>

                                                                <div className={styles.mainForn}>
                                                                    <form action="">
                                                                        <div className={styles.formInformation}>
                                                                            <span>Price:</span>
                                                                            <input type="text" placeholder='BUSD' />
                                                                        </div>

                                                                        <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                            <span>Amount:</span>
                                                                            <input type="text" placeholder='Enter' />
                                                                        </div>
                                                                        <div className={styles.formInformation} style={{ marginTop: '20px' }}>
                                                                            <span>Total::</span>
                                                                            <input type="text" placeholder='Enter' />
                                                                        </div>

                                                                        <button className={styles.butformSell}>
                                                                            Sell BTC
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </Grid>
                                                </Grid>

                                            </div>

                                        </div>


                                    )}

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div className={styles['sport-order-book-container']}>
                                <h2>Order Book</h2>
                            </div>

                            <div className={styles['sport-price-amount-total']}>
                                <div className={styles.boxes}>
                                    <img src={Box1} alt="box info one" />
                                    <img src={Box2} alt="box info one" />
                                    <img src={Box3} alt="box info one" />
                                </div>
                                <TableContainer>
                                    <Table sx={{ background: 'none' }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Price[EUR]</TableCell>
                                                <TableCell>Amount</TableCell>
                                                <TableCell>Total </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {loses.map((crypto) => (
                                                <TableRow key={crypto.id}>
                                                    <TableCell style={{ color: crypto.price_change_percentage_24h < 0 ? "green" : 'red' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                    <TableCell >{crypto.total_supply}</TableCell>
                                                    <TableCell >{crypto.total_volume}</TableCell>
                                                </TableRow>
                                            ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TableContainer>
                                    <Table sx={{ background: 'none' }}>

                                        <TableBody>
                                            {data
                                                .map((crypto) => (
                                                    <TableRow key={crypto.id}>

                                                        <TableCell style={{ color: crypto.price_change_percentage_24h > 0 ? "red" : 'green' }}>{numberFormat(crypto.current_price)}</TableCell>
                                                        <TableCell >{crypto.total_supply}</TableCell>
                                                        <TableCell >{crypto.total_volume}</TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <SpotData />
            </main>
        </>
    )
}

