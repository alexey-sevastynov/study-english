import React, { Component } from "react";
import "./addWords.css";

import arrow from "./icon/right-arrow.png";
import arrowBlack from "./icon/right-arrow-black.png";

export default class AddWords extends Component {
  render() {
    const {
      modeDark,
      textareaOne,
      textareaTwo,
      changeTextAreaOne,
      changeTextAreaTwo,
      cleanTextareaOne,
      cleanTextareaTwo,
    } = this.props;

    const imgArrow = modeDark ? (
      <img src={arrowBlack} height={20} width={95} alt="arrow"></img>
    ) : (
      <img src={arrow} height={20} width={95} alt="arrow"></img>
    );

    return (
      <section className="block">
        <div className="col_1">
          <textarea
            placeholder="Please add words to study..."
            value={textareaOne}
            onChange={changeTextAreaOne}
          ></textarea>
          <button className="block_btn" onClick={cleanTextareaOne}>
            clean up
          </button>
        </div>

        <div className="col_2">
          <div>translation</div>
          {imgArrow}
        </div>

        <div className="col_3">
          <textarea
            placeholder="Please add the translation of the words..."
            value={textareaTwo}
            onChange={changeTextAreaTwo}
          ></textarea>
          <button className="block_btn" onClick={cleanTextareaTwo}>
            clean up
          </button>
        </div>
      </section>
    );
  }
}
