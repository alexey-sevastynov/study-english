import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

import sun from "./icon/sun.png";
import moon from "./icon/moon.png";
import info from "./icon/info.png";
import infoDark from "./icon/infoDark.png";
import menu from "./icon/menu.png";
import menuDark from "./icon/menuDark.png";

export default class Header extends React.Component {
  render() {
    const { toggleModeState, modeDark } = this.props;

    const imgMode = modeDark ? (
      <img
        src={sun}
        width={50}
        height={50}
        alt="mode"
        onClick={toggleModeState}
      ></img>
    ) : (
      <img
        src={moon}
        width={50}
        height={50}
        alt="mode"
        onClick={toggleModeState}
      ></img>
    );

    const imgInfo = modeDark ? (
      <img src={info} width={50} height={50} alt="info"></img>
    ) : (
      <img src={infoDark} width={50} height={50} alt="info"></img>
    );

    const imgMain = modeDark ? (
      <img src={menu} width={50} height={50} alt="menu"></img>
    ) : (
      <img src={menuDark} width={50} height={50} alt="menu"></img>
    );

    return (
      <section className="header">
        <div className="header_container">
          <NavLink to="/" className="header_item">
            {imgInfo}
            <span className="tooltiptext">info</span>
          </NavLink>

          <NavLink to="/main" className="header_item ">
            {imgMain}
            <span className="tooltiptext">step 1</span>
          </NavLink>

          <div className="header_mode">
            <div className="header_item">
              {imgMode}
              <span className="tooltiptext">mode</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
