import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="app dark_mode">
        <Header />
      </div>
    );
  }
}

export default App;
