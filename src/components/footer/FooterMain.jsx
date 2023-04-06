import React, { Component } from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import further from "./icon/further.png";
import furtherDark from "./icon/furtherDark.png";
import back from "./icon/back.png";
import backDark from "./icon/backDark.png";
import reverse from "./icon/reverse.png";
import reverseDark from "./icon/reverseDark.png";
import wrire from "./icon/write.png";
import wrireDark from "./icon/writeDark.png";

export default class FooterMain extends Component {
  render() {
    const {
      modeDark,
      addedWordsInArray,
      reverseArray,
      checkForEmptiness,
      arreysWord,
    } = this.props;

    const imgFurther = modeDark ? (
      <img
        src={further}
        width={50}
        height={50}
        alt="next"
        onClick={checkForEmptiness}
      ></img>
    ) : (
      <img
        src={furtherDark}
        width={50}
        height={50}
        alt="next"
        onClick={checkForEmptiness}
      ></img>
    );

    const imgBack = modeDark ? (
      <img src={back} width={50} height={50} alt="back"></img>
    ) : (
      <img src={backDark} width={50} height={50} alt="back"></img>
    );

    const imgReverse = modeDark ? (
      <img
        src={reverse}
        width={50}
        height={50}
        alt="reverse"
        onClick={reverseArray}
      ></img>
    ) : (
      <img
        src={reverseDark}
        width={50}
        height={50}
        alt="reverse"
        onClick={reverseArray}
      ></img>
    );

    const imgWriten = modeDark ? (
      <img
        src={wrire}
        width={50}
        height={50}
        alt="wrire"
        onClick={addedWordsInArray}
      ></img>
    ) : (
      <img
        src={wrireDark}
        width={50}
        height={50}
        alt="wrire"
        onClick={addedWordsInArray}
      ></img>
    );

    const btnFurther =
      arreysWord.length === 0 ||
      arreysWord[0].colOne === "" ||
      arreysWord[0].colTwo === "" ? (
        <div className="footer_item">
          {imgFurther}
          <span className="tooltiptext">next</span>
        </div>
      ) : (
        <Link to="/check" className="footer_item">
          {imgFurther}
          <span className="tooltiptext">next</span>
        </Link>
      );

    return (
      <div className="footer ">
        <div className="footer_container">
          <Link to="/" className="footer_item">
            {imgBack}
            <span className="tooltiptext">back</span>
          </Link>
          <div className="footer_item">
            {imgReverse}
            <span className="tooltiptext">reverse</span>
          </div>
          <div className="footer_item">
            {imgWriten}
            <span className="tooltiptext">add</span>
          </div>

          {btnFurther}
        </div>
      </div>
    );
  }
}
