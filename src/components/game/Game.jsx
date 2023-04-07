import React, { Component } from "react";

import "./game.css";

import right from "./icon/true.png";
import wrong from "./icon/false.png";
import btnIcon from "./icon/try.png";
import next from "./icon/right.png";
import nextDark from "./icon/rightDark.png";

export default class Game extends Component {
  render() {
    const {
      arreysWord,
      indexRandom,
      inputWord,
      handleWordChange,
      duplicArreysWord,
      arrayWin,
      arrayLose,
    } = this.props;

    const wordCount = arreysWord.length;
    const wordCountTrue = arrayWin.length;
    const wordCountFalse = arrayLose.length;

    const text =
      duplicArreysWord.length === 0
        ? "WIN!"
        : duplicArreysWord[indexRandom].colOne;

    return (
      <section className="game">
        <div className="game-block">
          <div className="game-block-header">
            <div className="game-block-head"></div>
            <div className="game-block-header-percent">
              <p>1 from {wordCount}</p>
            </div>
          </div>

          <div className="game-block-main">
            <div className="game-block-main-col1">{text}</div>
            <div className="game-block-main-col2">
              <textarea
                placeholder="write here..."
                value={inputWord}
                onChange={handleWordChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="game-answer">
          <p>кошка - cat</p>
        </div>

        <div className="game-screen">
          <div className="game-screen-true">
            <p>{wordCountTrue}</p>
          </div>
          <div className="game-screen-false">
            <p>{wordCountFalse}</p>
          </div>
        </div>
      </section>
    );
  }
}
