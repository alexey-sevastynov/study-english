import React, { Component } from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import further from "./icon/further.png";
import furtherDark from "./icon/furtherDark.png";
import back from "./icon/back.png";
import backDark from "./icon/backDark.png";
import reverse from "./icon/reverse.png";
import reverseDark from "./icon/reverseDark.png";

export default class FooterMain extends Component {
  render() {
    const { modeDark } = this.props;

    const imgFurther = modeDark ? (
      <img src={further} width={50} height={50} alt="next"></img>
    ) : (
      <img src={furtherDark} width={50} height={50} alt="next"></img>
    );

    const imgReverse = modeDark ? (
      <img src={reverse} width={50} height={50} alt="icon"></img>
    ) : (
      <img src={reverseDark} width={50} height={50} alt="icon"></img>
    );

    const imgBack = modeDark ? (
      <img src={back} width={50} height={50} alt="icon"></img>
    ) : (
      <img src={backDark} width={50} height={50} alt="icon"></img>
    );

    return (
      <div className="footer ">
        <div className="footer_container">
          <div className="footer_item">
            {imgReverse}
            <span className="tooltiptext">reverse</span>
          </div>
          <Link to="/" className="footer_item">
            {imgBack}
            <span className="tooltiptext">back</span>
          </Link>
          <Link to="/check" className="footer_item">
            {imgFurther}
            <span className="tooltiptext">next</span>
          </Link>
        </div>
      </div>
    );
  }
}
