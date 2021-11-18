import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.scss";
import Header from "./Header";
import Intro from "./Intro";
import WhatIs from "./WhatIs";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Domestic from "./domestic";
function App() {
  return (
    <div className="pages">
      <Header />
      <main className="main">
        <Intro />
        <WhatIs />
      </main>
    </div>
  );
}

export default App;
