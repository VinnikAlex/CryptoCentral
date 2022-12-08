/** @format */

import "./App.css";

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "antd/dist/reset.css";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  News,
  Cryptodetails,
} from "./Components/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                exact
                path="/crypto/:coindId"
                element={<Cryptodetails />}
              />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoHome
            <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
