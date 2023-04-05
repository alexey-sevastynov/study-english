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
    return (
      <section className="header">
        <div className="header_container dark_mode">
          <NavLink to="/" className="header_item">
            <img src={infoDark} width={50} height={50} alt="info-icon"></img>
            <span className="tooltiptext">info</span>
          </NavLink>

          <NavLink to="/main" className="header_item ">
            <img src={menuDark} width={50} height={50} alt="menu-icon"></img>
            <span className="tooltiptext">step 1</span>
          </NavLink>

          <div className="header_mode">
            <div className="header_item">
              <img src={moon} width={50} height={50} alt="mode-icon"></img>
              <span className="tooltiptext">mode</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
