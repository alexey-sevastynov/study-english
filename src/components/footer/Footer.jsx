import React, { Component } from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import further from "./icon/further.png";
import furtherDark from "./icon/furtherDark.png";

export default class Footer extends Component {
  render() {
    const { modeDark } = this.props;

    const imgFurther = modeDark ? (
      <img src={further} width={50} height={50} alt="icon"></img>
    ) : (
      <img src={furtherDark} width={50} height={50} alt="icon"></img>
    );

    return (
      <section className="footer">
        <Link to="/main" className="footer_item">
          {imgFurther}

          <span className="tooltiptext">next</span>
        </Link>
      </section>
    );
  }
}
