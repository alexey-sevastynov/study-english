import React, { Component } from "react";
import "./footer.css";

import question from "./icon/question.png";
import questionDark from "./icon/questionDark.png";
import trying from "./icon/try.png";
import tryingDark from "./icon/tryDark.png";

export default class FooterGame extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer_item">
            {/* <img src={question} width={50} height={50} alt="icon"></img> */}
            <img src={questionDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">back</span>
          </div>
          <div className="footer_item">
            {/* <img src={trying} width={50} height={50} alt="icon"></img> */}
            <img src={tryingDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">study!</span>
          </div>
        </div>
      </div>
    );
  }
}
