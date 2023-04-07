import React, { Component } from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import back from "./icon/back.png";
import backDark from "./icon/backDark.png";
import game from "./icon/game.png";
import gameDark from "./icon/gameDark.png";

export default class FooterCheck extends Component {
  render() {
    const { modeDark, btnGame } = this.props;

    const imgGame = modeDark ? (
      <img src={game} width={50} height={50} alt="game" onClick={btnGame}></img>
    ) : (
      <img
        src={gameDark}
        width={50}
        height={50}
        alt="game"
        onClick={btnGame}
      ></img>
    );

    const imgBack = modeDark ? (
      <img src={back} width={50} height={50} alt="back"></img>
    ) : (
      <img src={backDark} width={50} height={50} alt="back"></img>
    );

    return (
      <div className="footer">
        <div className="footer_container">
          <Link to="/main" className="footer_item">
            {imgBack}
            <span className="tooltiptext">back</span>
          </Link>
          <Link to="/game" className="footer_item">
            {imgGame}
            <span className="tooltiptext">study!</span>
          </Link>
        </div>
      </div>
    );
  }
}
