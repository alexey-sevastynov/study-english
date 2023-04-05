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
  state = {
    modeDark: false,
  };

  toggleModeState = () => {
    this.setState(({ modeDark }) => {
      return {
        modeDark: !modeDark,
      };
    });
  };

  render() {
    const { modeDark } = this.state;

    const styleMode = modeDark ? "app" : "app dark_mode";

    return (
      <div className={styleMode}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                toggleModeState={this.toggleModeState}
                modeDark={modeDark}
              />
            }
          >
            <Route index element={<InfoPage modeDark={modeDark} />} />
            <Route path="main" element={<MainPages modeDark={modeDark} />} />
            <Route path="check" element={<CheckPage modeDark={modeDark} />} />
            <Route path="game" element={<GamePage modeDark={modeDark} />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
