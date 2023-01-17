/** @format */

import React from "react";
import { useState, useEffect } from "react";
import cryptoAPI from "../Services/cryptoAPI";

import millify from "millify";
import { Card, Row, Col, Input, Spin, Space } from "antd";
import { Link } from "react-router-dom";
// const { AudioOutlined } = icons;
const { Search } = Input;

const Cryptocurrencies = ({ simplified }) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const count = simplified ? 10 : 100;

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm != "") {
      const filteredData = cryptoCurrencies.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredData);
      setCryptoCurrencies(filteredData);
    } else {
      cryptoAPI.getCoins(count).then((response) => {
        setCryptoCurrencies(response.data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  const onSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="search-crypto">
        <Space direction="vertical">
          <Search
            placeholder="Search Cryptocurrency"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoCurrencies.map((currency) => (
          <Col
            key={currency.id}
            sm={24}
            md={12}
            lg={6}
            xl={4}
            className="crypto-card"
          >
            {/* <Link to={`/crypto/${currency.id}`}> */}
            <Spin spinning={loading}>
              <Card
                key={currency.symbol}
                title={`${currency.name}`}
                extra={<img className="crypto-image" src={currency.image} />}
                hoverable
              >
                <p>Price: ${millify(currency.current_price)} </p>
                <p>Market Cap: ${millify(currency.market_cap)} </p>
                <p>
                  Daily Change: {millify(currency.price_change_percentage_24h)}{" "}
                  %
                </p>
              </Card>
            </Spin>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
