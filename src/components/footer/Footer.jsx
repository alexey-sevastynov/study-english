import React, { Component } from "react";
import "./footer.css";

import further from "./icon/further.png";
import furtherDark from "./icon/furtherDark.png";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer_item">
          <img src={furtherDark} width={50} height={50} alt="icon"></img>
          {/* <img src={further} width={50} height={50} alt="icon"></img> */}

          <span className="tooltiptext">next</span>
        </div>
      </section>
    );
  }
}
