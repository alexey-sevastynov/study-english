import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import AddWords from "./components/addWords/AddWorks";
import FooterMain from "./components/footer/FooterMain";
import CreatedWords from "./components/checkWords/CheckWords";
import FooterCheck from "./components/footer/FooterCheck";
import Game from "./components/game/Game";
import FooterGame from "./components/footer/FooterGame";

class App extends React.Component {
  render() {
    return (
      <div className="app dark_mode">
        <Header />

        <div className="container">
          {/* <Info /> */}
          {/* <AddWords /> */}
          {/* <CreatedWords /> */}
          <Game />
        </div>

        {/* <Footer /> */}
        {/* <FooterMain /> */}
        {/* <FooterCheck /> */}
        <FooterGame />
      </div>
    );
  }
}

export default App;
