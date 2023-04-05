import React, { Component } from "react";

import "./checkWords.css";

export default class ItemWord extends Component {
  render() {
    const { objWords } = this.props;

    let count = 1;

    const col_0 = objWords.arrayOne.map((item) => {
      return <p key={item}>{count++}.</p>;
    });

    const col_1 = objWords.arrayOne.map((item) => {
      return <p key={item}>{item}</p>;
    });

    const col_2 = objWords.arrayOne.map((item) => {
      return <p key={item}>=</p>;
    });

    const col_3 = objWords.arrayTwo.map((item) => {
      return <p key={item}>{item}</p>;
    });

    return (
      <ul className="table-item">
        <li className="table_col_0">{col_0}</li>
        <li className="table_col_1">{col_1}</li>
        <li className="table_col_2">{col_2}</li>
        <li className="table_col_3">{col_3}</li>
      </ul>
    );
  }
}
