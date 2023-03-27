import React from 'react'
import '../styles/marketbanner.css'
import Grid from '@mui/material/Grid'



export default function MarketBanner({ coinsBtc,
    btcUsdt,
    chartBtc,
    EthUsdt,
    chartEth,
    coinsEth,
    coinsAave,
    AaveUsdt,
    chartAave,
    coinsxrp,
    xrpUsdt,
    chartxrp,
    btcPrice,
    btcpriceUsd, btcProfit, btcVolume, EthProfit, EhtVolume, AaveProfit, AaveVolume, xrpProfit, xrpVolume,
    ethpriceUsd, ethPrice, xprPrice, xprpriceUsd, AavePrice, AavepriceUsd, color }) {
    return (
        <>
            <section className='market-banner'>
                <div className='market-banner-container'>
                    <Grid container spacing={2}>
                        <Grid items xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div class="card">
                                <div className='card-info'>
                                    <img src={coinsBtc} alt="coin" />
                                    <p style={{ marginLeft: 10 }}>{btcUsdt}</p>
                                    <div style={{ marginLeft: 25 }}>
                                        <img src={chartBtc} alt="chart info" />
                                    </div>

                                </div>

                                <div className='card-price'>
                                    <h5>{btcPrice}</h5>
                                    <h6>{btcpriceUsd}</h6>
                                </div>

                                <div className='card-price-2'>
                                    <p style={{ color }}>{btcProfit}</p>
                                    <span>{btcVolume}</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid items xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div class="card">
                                <div className='card-info'>
                                    <img src={coinsEth} alt="coin" />
                                    <p style={{ marginLeft: 10 }}>{EthUsdt}</p>
                                    <div style={{ marginLeft: 25 }}>
                                        <img src={chartEth} alt="chart info" />
                                    </div>

                                </div>

                                <div className='card-price'>
                                    <h5>{ethPrice}</h5>
                                    <h6>{ethpriceUsd}</h6>
                                </div>

                                <div className='card-price-2'>
                                    <p style={{ color }}>{EthProfit}</p>
                                    <span>{EhtVolume}</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid items xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div class="card">
                                <div className='card-info'>
                                    <img src={coinsAave} alt="coin" />
                                    <p style={{ marginLeft: 10 }}>{AaveUsdt}</p>
                                    <div style={{ marginLeft: 25 }}>
                                        <img src={chartAave} alt="chart info" />
                                    </div>

                                </div>

                                <div className='card-price'>
                                    <h5>{AavePrice}</h5>
                                    <h6>{AavepriceUsd}</h6>
                                </div>

                                <div className='card-price-2'>
                                    <p style={{ color }}>{AaveProfit}</p>
                                    <span>{AaveVolume}</span>
                                </div>

                            </div>
                        </Grid>
                        <Grid items xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div class="card">
                                <div className='card-info'>
                                    <img src={coinsxrp} alt="coin" />
                                    <p style={{ marginLeft: 10 }}>{xrpUsdt}</p>
                                    <div style={{ marginLeft: 25 }}>
                                        <img src={chartxrp} alt="chart info" />
                                    </div>

                                </div>

                                <div className='card-price'>
                                    <h5>{xprPrice}</h5>
                                    <h6>{xprpriceUsd}</h6>
                                </div>
                                <div className='card-price-2'>
                                    <p style={{ color }}>{xrpProfit}</p>
                                    <span>{xrpVolume}</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}