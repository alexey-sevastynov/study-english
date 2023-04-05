import React from "react";

import CreatedWords from "../components/checkWords/CheckWords";
import FooterCheck from "../components/footer/FooterCheck";

export default function CheckPage(props) {
  const { modeDark } = props;

  return (
    <>
      <div className="container">
        <CreatedWords />
      </div>
      <FooterCheck modeDark={modeDark} />
    </>
  );
}
