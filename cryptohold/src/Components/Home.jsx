/** @format */

import { useState, useEffect } from "react";
import cryptoAPI from "../Services/cryptoAPI";
import "bootstrap/dist/css/bootstrap.min.css";

import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";

import { Cryptocurrencies, News } from "./index";

import "antd/dist/reset.css";

const { Title } = Typography;

const Homepage = () => {
  const [globalData, setGlobalData] = useState({});
  const [cryptoCurrencies, setCryptoCurrencies] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cryptoAPI.getGlobalData().then((response) => {
      console.log(response.data.data);
      setGlobalData(response.data.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(cryptoCurrencies);
  }, [cryptoCurrencies]);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row className="global-values" style={{ textAlign: "left" }}>
        <Col sm={12}>
          <Spin spinning={loading}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalData.totalCoins}
            />
          </Spin>
        </Col>
        <Col sm={12}>
          <Spin spinning={loading}>
            <Statistic title="Exchanges" value={globalData.totalExchanges} />
          </Spin>
        </Col>
        <Col sm={12}>
          <Spin spinning={loading}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalData.totalMarketCap)}
            />
          </Spin>
        </Col>
        <Col sm={12}>
          <Spin spinning={loading}>
            <Statistic
              title="Total 24h Volume"
              value={millify(globalData.total24hVolume)}
            />
          </Spin>
        </Col>
        <Col sm={12}>
          <Spin spinning={loading}>
            <Statistic
              title="Total Markets"
              value={millify(globalData.totalMarkets)}
            />
          </Spin>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
