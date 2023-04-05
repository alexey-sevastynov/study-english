import React, { Component } from "react";

import "./checkWords.css";
import ItemWord from "./ItemWord";

export default class CreatedWords extends Component {
  render() {
    const { objWords } = this.props;

    return (
      <div className="table">
        <ItemWord objWords={objWords} />
      </div>
    );
  }
}
