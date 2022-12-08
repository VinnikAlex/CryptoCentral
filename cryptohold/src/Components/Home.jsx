/** @format */

// import { useState, useEffect } from "react";
// import cryptoAPI from "../Services/cryptoAPI";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Homepage = () => {
//   //currency convertor/formatter
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//     notation: "compact",
//   });

//   // number style formatter
//   const numberStyle = new Intl.NumberFormat("en-US", {
//     style: "decimal",
//   });

//   const [cryptoCurrencies, setCryptoCurrencies] = useState([{}]);
//   const [globalData, setGlobalData] = useState({});

//   useEffect(() => {
//     cryptoAPI
//       .getCoins()
//       .then((response) => {
//         setCryptoCurrencies(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     cryptoAPI
//       .getGlobalData()
//       .then((response) => {
//         console.log(response.data.data);
//         setGlobalData(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     console.log(cryptoCurrencies);
//   }, [cryptoCurrencies]);

//   //   const searchResult = (keyword) => {
//   //     if (keyword === "") {
//   //       setSearchedCoins([]);
//   //       return;
//   //     }
//   // cryptoAPI
//   //   .search(keyword)
//   //   .then((response) => {
//   //     setSearchedCoins(response.data.coins.map((coin) => coin.id));
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });

//   if (cryptoCurrencies) {
//     return (
//       <div>
//         <div>
//           <h2 className="headerTitle">Global Crypto Stats</h2>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 col-xs-12 headerInfo">
//                 <div>
//                   <p>Total CryptoCurrencies:</p>

//                   <h4> {numberStyle.format(globalData.totalCoins)}</h4>
//                 </div>
//                 <div>
//                   <p>Total MarketCap:</p>
//                   <h4>{formatter.format(globalData.totalMarketCap)}</h4>
//                 </div>
//                 <div>
//                   <p>Total Exchanges:</p>
//                   <h4>{numberStyle.format(globalData.totalExchanges)}</h4>
//                 </div>
//               </div>
//               <div className="col-md-6 col-xs-12 headerInfo">
//                 <div>
//                   <p>Total Volume: </p>
//                   <h4>{formatter.format(globalData.total24hVolume)}</h4>
//                 </div>
//                 <div>
//                   <p>Total Markets: </p>
//                   <h4>{numberStyle.format(globalData.totalMarkets)}</h4>
//                 </div>
//                 <div>
//                   {" "}
//                   <p>BTC Dominance: </p>
//                   <h4>{numberStyle.format(globalData.btcDominance)}%</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2>CryptoCurrencies</h2>
//         <div className="cryptoContainer">
//           <div className="row justify-content-center">
//             {cryptoCurrencies.map((coin) => (
//               <div className="col-xl-2 col-lg-3 col-md-5 col-sm-10 cryptoCurrency">
//                 <div key={coin.symbol}>
//                   <div className="cryptoHeader">
//                     <h2>{coin.symbol && coin.symbol.toUpperCase()}</h2>
//                     <img src={coin.image} width="40px" height="40px"></img>
//                   </div>
//                   <div className="cryptoDetails">
//                     <p>Price: {formatter.format(coin.current_price)}</p>
//                     <p>Coin Market Cap: {formatter.format(coin.market_cap)}</p>
//                     <p>
//                       Daily Change:{" "}
//                       {numberStyle.format(
//                         coin.market_cap_change_percentage_24h
//                       )}
//                       %
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// };
import React from "react";

const Homepage = () => {
  return <div>Homepage</div>;
};

export default Homepage;
