import React from "react";

import CreatedWords from "../components/checkWords/CheckWords";
import FooterCheck from "../components/footer/FooterCheck";

export default function CheckPage(props) {
  const { modeDark, objWords } = props;

  return (
    <>
      <div className="container">
        <CreatedWords objWords={objWords} />
      </div>
      <FooterCheck modeDark={modeDark} />
    </>
  );
}
