/** @format */

import axios from "axios";

const getCoins = async () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
  );
};

const getGlobalData = async () => {
  return axios.get(
    "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "5e9cae9e7dmsh197e43d1fa33957p11006fjsnf533498a606a",
      },
    }
  );
};
//   return axios.get(
//     "https://api.coingecko.com/api/v3/global",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//         "x-rapidapi-key": "5e9cae9e7dmsh197e43d1fa33957p11006fjsnf533498a606a",
//       },
//     }
//   );
// };

const search = async (keyword) => {
  return axios.get("https://api.coingecko.com/api/v3/search?query=" + keyword, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "5e9cae9e7dmsh197e43d1fa33957p11006fjsnf533498a606a",
    },
  });
};

const webSocket = () => {
  let lastPrice = 0;
  let ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcbusd@trade`);

  ws.onmessage = (event) => {
    console.log(event);
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p);
    lastPrice = price;
  };

  return lastPrice;
};

export default {
  webSocket: webSocket,
  getCoins: getCoins,
  getGlobalData: getGlobalData,
  search: search,
};
