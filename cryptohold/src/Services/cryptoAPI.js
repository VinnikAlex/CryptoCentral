/** @format */

import axios from "axios";

const getCoins = async (coins) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coins}&page=1&sparkline=false`
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

const getTopNews = async () => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=Cryptocurrency&from=2023-01-17&sortBy=popularity&apiKey=f91033e3d7fc4507bc1a95e8fdf3c441`
  );
};

export default {
  getCoins: getCoins,
  getGlobalData: getGlobalData,
  getTopNews: getTopNews,
};
