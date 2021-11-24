import "../styles/Header.scss";
import Questions from "./Questions";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="header" name="header">
        <h1 className="title">No estás sola</h1>
        <nav className="nav">
          <Link smooth={true} to="intro" className="list">
            {" "}
            INTRO{" "}
          </Link>

          <Link smooth={true} to="whatIs" className="list">
            ¿QUÉ ES?
          </Link>
          <Link smooth={true} to="letter" className="list">
            NO ESTÁS SOLA
          </Link>
          <Link smooth={true} to="questions" className="list">
            POR SI LO NECESITAS
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
