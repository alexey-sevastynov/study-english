import React, { Component } from "react";
import "./footer.css";

import question from "./icon/question.png";
import questionDark from "./icon/questionDark.png";
import trying from "./icon/try.png";
import tryingDark from "./icon/tryDark.png";

export default class FooterGame extends Component {
  render() {
    const { modeDark, checkForMatches } = this.props;

    const imgTry = modeDark ? (
      <img
        src={trying}
        width={50}
        height={50}
        alt="try"
        onClick={checkForMatches}
      ></img>
    ) : (
      <img
        src={tryingDark}
        width={50}
        height={50}
        alt="try"
        onClick={checkForMatches}
      ></img>
    );

    const imgQuestion = modeDark ? (
      <img src={question} width={50} height={50} alt="help"></img>
    ) : (
      <img src={questionDark} width={50} height={50} alt="help"></img>
    );
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer_item">
            {imgQuestion}
            <span className="tooltiptext">help</span>
          </div>
          <div className="footer_item">
            {imgTry}
            <span className="tooltiptext">TRY!</span>
          </div>
        </div>
      </div>
    );
  }
}
