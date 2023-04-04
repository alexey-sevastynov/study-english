import React, { Component } from "react";
import "./footer.css";

import back from "./icon/back.png";
import backDark from "./icon/backDark.png";
import game from "./icon/game.png";
import gameDark from "./icon/gameDark.png";

export default class FooterCheck extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer_item">
            {/* <img src={back} width={50} height={50} alt="icon"></img> */}
            <img src={backDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">back</span>
          </div>
          <div className="footer_item">
            {/* <img src={game} width={50} height={50} alt="icon"></img> */}
            <img src={gameDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">study!</span>
          </div>
        </div>
      </div>
    );
  }
}
