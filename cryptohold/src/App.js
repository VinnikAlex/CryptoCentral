/** @format */

import "./App.css";
import { Navbar, Homepage } from "./Components/index";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>

      <div className="main">
        <Homepage />
      </div>

      <div className="footer">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
