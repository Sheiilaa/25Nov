import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.scss";
import Header from "./Header";
import Intro from "./Intro";
import WhatIs from "./WhatIs";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Domestic from "./Domestic";
import Letter from "./Letter";
import Questions from "./Questions";
import Footer from "./Footer";
function App() {
  //Para los collapsables
  const [collapsable1, setCollapsable1] = useState("hidden");
  const [collapsable2, setCollapsable2] = useState("hidden");
  const [collapsable3, setCollapsable3] = useState("hidden");
  const [collapsable4, setCollapsable4] = useState("hidden");
  const [collapsable5, setCollapsable5] = useState("hidden");
  const [collapsable6, setCollapsable6] = useState("hidden");

  const handleCollapsable = (id) => {
    const selected = id;
    if (selected === "collapsable1") {
      setCollapsable1("");
      setCollapsable2("hidden");
      setCollapsable3("hidden");
      setCollapsable4("hidden");
      setCollapsable5("hidden");
      setCollapsable6("hidden");
    } else if (selected === "collapsable2") {
      setCollapsable2("");
      setCollapsable1("hidden");
      setCollapsable3("hidden");
      setCollapsable4("hidden");
      setCollapsable5("hidden");
      setCollapsable6("hidden");
    } else if (selected === "collapsable3") {
      setCollapsable3("");
      setCollapsable1("hidden");
      setCollapsable2("hidden");
      setCollapsable4("hidden");
      setCollapsable5("hidden");
      setCollapsable6("hidden");
    } else if (selected === "collapsable4") {
      setCollapsable4("");
      setCollapsable1("hidden");
      setCollapsable2("hidden");
      setCollapsable3("hidden");
      setCollapsable5("hidden");
      setCollapsable6("hidden");
    } else if (selected === "collapsable5") {
      setCollapsable5("");
      setCollapsable1("hidden");
      setCollapsable2("hidden");
      setCollapsable3("hidden");
      setCollapsable4("hidden");
      setCollapsable6("hidden");
    } else if (selected === "collapsable6") {
      setCollapsable6("");
      setCollapsable1("hidden");
      setCollapsable2("hidden");
      setCollapsable3("hidden");
      setCollapsable4("hidden");
      setCollapsable5("hidden");
    }
  };
  return (
    <div className="pages">
      <Switch>
        <Route path="/src/components/Questions.js">
          <Questions />
        </Route>
        <Route path="/src/components/Domestic.js">
          <Domestic />
        </Route>
        <Route exact path="/">
          <Header />
          <main className="main">
            <Intro />
            <WhatIs
              handleCollapsable={handleCollapsable}
              collapsable1={collapsable1}
              collapsable2={collapsable2}
              collapsable3={collapsable3}
              collapsable4={collapsable4}
              collapsable5={collapsable5}
              collapsable6={collapsable6}
            />
            <Letter />
            <Questions />
          </main>

          <Footer />
        </Route>

        <Route path="/domestic">
          <Domestic />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
