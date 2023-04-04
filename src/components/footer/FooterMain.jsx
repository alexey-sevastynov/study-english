import React, { Component } from "react";
import "./footer.css";

import further from "./icon/further.png";
import furtherDark from "./icon/furtherDark.png";
import back from "./icon/back.png";
import backDark from "./icon/backDark.png";
import reverse from "./icon/reverse.png";
import reverseDark from "./icon/reverseDark.png";

export default class FooterMain extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer_item">
            {/* <img src={reverse} width={50} height={50} alt="icon"></img> */}
            <img src={reverseDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">reverse</span>
          </div>
          <div className="footer_item">
            {/* <img src={back} width={50} height={50} alt="icon"></img> */}
            <img src={backDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">back</span>
          </div>
          <div className="footer_item">
            {/* <img src={further} width={50} height={50} alt="icon"></img> */}
            <img src={furtherDark} width={50} height={50} alt="icon"></img>
            <span className="tooltiptext">next</span>
          </div>
        </div>
      </div>
    );
  }
}
