import React from "react";

import Header from "../components/header/Header";
import AddWords from "../components/addWords/AddWords";

import FooterMain from "../components/footer/FooterMain";

export default function MainPages() {
  return (
    <div className="container">
      <AddWords />
      <FooterMain />
    </div>
  );
}
