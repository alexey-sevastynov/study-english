import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import AddWords from "./components/addWords/AddWords";
import FooterMain from "./components/footer/FooterMain";
import CreatedWords from "./components/checkWords/CheckWords";
import FooterCheck from "./components/footer/FooterCheck";
import Game from "./components/game/Game";
import FooterGame from "./components/footer/FooterGame";
import Layout from "./components/layout/Layout";

import InfoPage from "./page/InfoPage";
import MainPages from "./page/MainPages";
import CheckPage from "./page/CheckPage";
import GamePage from "./page/GamePage";
import NotfoundPage from "./page/NotfoundPage";

class App extends React.Component {
  render() {
    return (
      <div className="app dark_mode">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InfoPage />} />
            <Route path="main" element={<MainPages />} />
            <Route path="check" element={<CheckPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
