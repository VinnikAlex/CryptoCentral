/** @format */

import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "antd/dist/reset.css";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoCentral</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">

        </Button> */}
      </div>

      <Menu theme="dark" mode="inline" className="item-container">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">CryptoCurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item>
          <div className="auth">
            <Button type="primary" className="login-button">
              Sign In
            </Button>
            {/* <Button type="primary" className="register-button">
              Register
            </Button> */}
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
