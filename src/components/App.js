import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.scss";
import Header from "./Header";
import Intro from "./Intro";

function App() {
  return (
    <div className="pages">
      <Header />
      <main className="main">
        <Intro />
      </main>
    </div>
  );
}

export default App;
