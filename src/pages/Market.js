import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import "./style/market.css";
// import { NavLink, Outlet } from 'react-router-dom';
import search from "../images/search.svg";

export default function Market() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [getFavourite, setGetFovorite] = useState([])

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // this is to format the Number
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);


  // this is a function to filter different kind of coin
  const searchRepos = (query) => {
    return cryptoList.filter((repo) => {
      return repo.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  const handleToggleFavorite = (id) => {
    // Check if item is already in favorites array
    const index = favorites.findIndex((fav) => fav.id === id);

    // If item is not in favorites array, add it
    if (index === -1) {
      const favoriteItem = cryptoList.find((coin) => coin.id === id);
      setFavorites([...favorites, favoriteItem]);
    } else {
      // If item is already in favorites array, remove it
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
    }
  };



  useEffect(() => {
    if (favorites.length > 0) { localStorage.setItem("favorites", JSON.stringify(favorites)) }
  }, [favorites])


  // // Retrieve the data from local storage
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('favorites'));
    setGetFovorite(storedItem)
  }, [getFavourite])


  function handleRemoveClick() {

    // Remove the item from local storage with key 'myItem'
    const keyToRemove = 'favorites';

    // Remove the item from local storage
    localStorage.removeItem(keyToRemove);
  }





  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        )
        .then((res) => {
          setCryptoList(res.data);
          console.log(res.data, 'code')
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
    return () => clearInterval(interval);
  });



  return (
    <div className='market'>
      <div className='market-container'>
        <div className='search_header'>
          <img src={search} alt="search"
          />
          <input type="text" placeholder='Search Coin'
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)}
          />
        </div>
        <div className='round_icon'> </div>

        <div className='market-routes'>
          <div className='market-routes-container'>
            <div className="market-route-content">
              <button
                onClick={() => handleTabClick(0)}
                className={`${['spot-tab-button']} ${activeTab === 0 ? `${['active']}` : ""}`}
              >
                Favorites
              </button>
            </div>
            <div className="market-route-content">
              <button
                onClick={() => handleTabClick(1)}
                className={`${['spot-tab-button']} ${activeTab === 1 ? `${['active']}` : ""}`}
              >
                Spot
              </button>

              {/* <NavLink to='market-spot'>Spot</NavLink> */}
            </div>
            <div className="market-route-content">

              <button
                onClick={() => handleTabClick(2)}
                className={`${['spot-tab-button']} ${activeTab === 2 ? `${['active']}` : ""}`}
              >
                Features
              </button>
              {/* <NavLink to='market-features'>Features</NavLink> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Market-contents-display">
        <div>
          {activeTab === 0 && (
            <div className='table-market-spot-div'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last price</th>
                    <th>24h chg%</th>
                    <th>Add to Favourite</th>
                  </tr>
                </thead>

                {getFavourite ? getFavourite.map((coin) => (
                  <tbody key={coin.id}>
                    <tr>
                      <td className="coin-transform">
                        {coin.symbol} <span>/usdt</span>
                      </td>
                      <td>{numberFormat(coin.current_price)}</td>
                      <td className="coin-name">
                        {coin.price_change_percentage_24h >= 0 && (
                          <button className="positive">
                            +{coin.price_change_percentage_24h.toFixed(2)}%{" "}
                          </button>
                        )}
                        {coin.price_change_percentage_24h < 0 && (
                          <button className="negative">
                            {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                          </button>
                        )}
                      </td>

                      <td>
                        <input type="checkbox" name="" id="" onClick={handleRemoveClick} />
                        {/* <div className="star-fav" onClick={handleRemoveClick}>
                          {favorites.findIndex((fav) => fav.id === coin.id) !== -1
                            ? "Remove"
                            : <>&#9734;</>}

                        </div> */}

                      </td>

                    </tr>
                  </tbody>
                )) : <div style={{
                  color: 'white',
                  display: 'flex',
                  width: '100vw',
                  marginTop: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}> No data !</div>
                }
              </table>

            </div>
          )}
          {activeTab === 1 && (
            <>
              <div className='table-market-spot-div'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last price</th>
                      <th>24h chg%</th>
                      <th>Add to Favourite</th>
                    </tr>
                  </thead>

                  {searchRepos ? searchRepos(searchQuery).map((coin) => (
                    <tbody key={coin.id}>
                      <tr>
                        <td className="coin-transform">
                          {coin.symbol} <span>/usdt</span>
                        </td>
                        <td>{coin.current_price}</td>
                        <td className="coin-name">
                          {coin.price_change_percentage_24h >= 0 && (
                            <button className="positive">
                              +{coin.price_change_percentage_24h.toFixed(2)}%{" "}
                            </button>
                          )}
                          {coin.price_change_percentage_24h < 0 && (
                            <button className="negative">
                              {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                            </button>
                          )}
                        </td>

                        <td>
                          <div className="star-fav" onClick={() => handleToggleFavorite(coin.id)}>
                            {favorites.findIndex((fav) => fav.id === coin.id) !== -1
                              ? "Remove"
                              : <>&#9734;</>}

                          </div>

                        </td>

                      </tr>
                    </tbody>
                  )) : <div style={{
                    color: 'white',
                    display: 'flex',
                    width: '100vw',
                    marginTop: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}> loading data !</div>
                  }
                </table>

              </div>


            </>
          )}
          {activeTab === 2 && (
            <>
              <div className='table-market-spot-div'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last price</th>
                      <th>24h chg%</th>
                      <th>Add to Favourite</th>
                    </tr>
                  </thead>

                  {searchRepos ? searchRepos(searchQuery).map((coin) => (
                    <tbody key={coin.id}>
                      <tr>
                        <td className="coin-transform">
                          {coin.symbol} <span>/usdt</span>
                        </td>
                        <td>{coin.current_price}</td>
                        <td className="coin-name">
                          {coin.price_change_percentage_24h >= 0 && (
                            <button className="positive">
                              +{coin.price_change_percentage_24h.toFixed(2)}%{" "}
                            </button>
                          )}
                          {coin.price_change_percentage_24h < 0 && (
                            <button className="negative">
                              {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                            </button>
                          )}
                        </td>

                        <td>
                          <div className="star-fav" onClick={() => handleToggleFavorite(coin.id)}>
                            {favorites.findIndex((fav) => fav.id === coin.id) !== -1
                              ? "Remove"
                              : <>&#9734;</>}

                          </div>

                        </td>

                      </tr>
                    </tbody>
                  )) : <div style={{
                    color: 'white',
                    display: 'flex',
                    width: '100vw',
                    marginTop: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}> loading data !</div>
                  }
                </table>

              </div>
            </>
          )}

        </div>
        {/* <Outlet /> */}
      </div>
    </div >
  )
}



