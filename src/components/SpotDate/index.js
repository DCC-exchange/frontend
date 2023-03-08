import React, { useState } from "react";
import styles from './spotdata.module.css'

import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,

} from '@mui/material'



export default function SpotData() {
    const [activeTab, setActiveTab] = useState(0);


    const handleTabClick = (index) => {
        setActiveTab(index);
    };



    return (
        <>
            <main className={styles.mainContainer}>
                <section className={styles.mainContent}>
                    <div className={styles.SpotDataTab}>
                        <button
                            onClick={() => handleTabClick(0)}
                            className={`${styles.dataTab} ${activeTab === 0 ? `${styles.active}` : ""}`}
                        >
                            Orders[0]
                        </button>
                        <button
                            onClick={() => handleTabClick(1)}
                            className={`${styles.dataTab} ${activeTab === 1 ? `${styles.active}` : ""}`}
                        >
                            Order History
                        </button>
                        <button
                            onClick={() => handleTabClick(2)}
                            className={`${styles.dataTab} ${activeTab === 2 ? `${styles.active}` : ""}`}
                        >
                            Trade History
                        </button>
                        <button
                            onClick={() => handleTabClick(3)}
                            className={`${styles.dataTab} ${activeTab === 3 ? `${styles.active}` : ""}`}
                        >
                            Funds
                        </button>
                    </div>



                    <div>
                        {activeTab === 0 && (
                            <>

                                <div className={styles.spotInfoTab}>
                                    <TableContainer>
                                        <Table sx={{ background: 'none' }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Date </TableCell>
                                                    <TableCell>Pair  </TableCell>
                                                    <TableCell>Type </TableCell>
                                                    <TableCell>Side </TableCell>
                                                    <TableCell> Price </TableCell>
                                                    <TableCell> Amount </TableCell>
                                                    <TableCell> Total </TableCell>
                                                    <TableCell> Action </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            {/* <TableBody>
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
                                </TableBody> */}
                                        </Table>
                                    </TableContainer>
                                </div>
                            </>
                        )}

                    </div>

                </section>
            </main>
        </>
    )
}