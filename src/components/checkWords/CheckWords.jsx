import React, { Component } from "react";

import "./checkWords.css";

export default class CreatedWords extends Component {
  render() {
    const { arreysWord } = this.props;

    const items = arreysWord.map((item) => (
      <ul className="table-item" key={item.id}>
        <li className="table_col_0">{item.id}</li>
        <li className="table_col_1">{item.colOne}</li>
        <li className="table_col_2">=</li>
        <li className="table_col_3">{item.colTwo}</li>
      </ul>
    ));

    return <div className="table">{items}</div>;
  }
}
