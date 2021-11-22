import "../styles/Header.scss";
import Questions from "./Questions";
import { Route, Link } from "react-router-dom";
import WhatIs from "./WhatIs";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">No estas sola</h1>
        <nav className="nav">
          <a href="" className="list">
            INTRO
          </a>
          <a href="" className="list">
            ¿QUE ES?
          </a>
          <a href="" className="list">
            NO ESTAS SOLA
          </a>
          <a href="/#/questions" className="list">
            POR SI LO NECESITAS
          </a>
        </nav>
      </header>
      <Route path="/questions">
        <Questions />
      </Route>
    </>
  );
};

export default Header;
