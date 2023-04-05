import React, { Component } from "react";

import "./game.css";

import right from "./icon/true.png";
import wrong from "./icon/false.png";
import btnIcon from "./icon/try.png";
import next from "./icon/right.png";
import nextDark from "./icon/rightDark.png";

export default class Game extends Component {
  render() {
    return (
      <section className="game">
        <div className="game-block">
          <div className="game-block-header">
            <div className="game-block-head"></div>
            <div className="game-block-header-percent">
              <p>1 from 20</p>
            </div>
          </div>

          <div className="game-block-main">
            <div className="game-block-main-col1">кошка</div>
            <div className="game-block-main-col2">
              <textarea placeholder="translate..."></textarea>
            </div>
          </div>
        </div>

        <div className="game-answer">
          <p>кошка - cat</p>
        </div>

        <div className="game-screen">
          <div className="game-screen-true">
            <p>4</p>
          </div>
          <div className="game-screen-false">
            <p>3</p>
          </div>
        </div>
      </section>
    );
  }
}
