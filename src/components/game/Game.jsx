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
      inputWordDuplicat,
      handleWordChange,
      duplicArreysWord,
      arrayWin,
      arrayLose,
      checkLose,
      checkWin,
      help,
    } = this.props;

    const wordCount = arreysWord.length;
    const wordCountTrue = arrayWin.length;
    const wordCountFalse = arrayLose.length;
    const wordDuplicCount = duplicArreysWord.length;

    const showNumWordCount = wordCount - wordDuplicCount; // number of words passed

    const textMain =
      duplicArreysWord.length === 0
        ? "WIN!"
        : duplicArreysWord[indexRandom].colOne;

    const text =
      duplicArreysWord.length === 0
        ? "WIN!"
        : duplicArreysWord[indexRandom].colTwo;

    const percent = (100 * showNumWordCount) / wordCount;
    const showPercent = { width: `${percent}%` };

    const styleRed = checkLose
      ? "game-block-head answer-false"
      : "game-block-head ";

    const styleGreen = checkWin
      ? "game-block-head answer-true"
      : "game-block-head ";

    const stylePercentPanel = checkWin ? styleGreen : styleRed;

    const visibleHelp = help
      ? `${textMain} - ${text}`
      : 'if you want to know help, you view down and onclick "HELP"';

    return (
      <section className="game">
        <div className="game-block">
          <div className="game-block-header">
            <div className={stylePercentPanel} style={showPercent}></div>
            <div className="game-block-header-percent">
              <p>
                {showNumWordCount} from {wordCount}
              </p>
            </div>
          </div>

          <div className="game-block-main">
            <div className="game-block-main-col1">{textMain}</div>
            <div className="game-block-main-col2">
              <input
                placeholder="write here..."
                value={inputWord}
                onChange={handleWordChange}
                onKeyUp={handleWordChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="game-answer">
          <p>{visibleHelp}</p>
        </div>
        <div className="game-screen">
          <div className="game-screen-true">
            <p>{wordCountTrue}</p>
          </div>
          <div className="game-screen-false">
            <p>{wordCountFalse}</p>
          </div>
        </div>

        {wordCountFalse === 0 ? null : (
          <div className="false-words">
            <p>
              {arrayLose[wordCountFalse - 1].colOne} ={" "}
              {arrayLose[wordCountFalse - 1].colTwo} (<s>{inputWordDuplicat}</s>
              )
            </p>
          </div>
        )}
      </section>
    );
  }
}
