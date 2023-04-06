import React from "react";

import CreatedWords from "../components/checkWords/CheckWords";
import FooterCheck from "../components/footer/FooterCheck";

export default function CheckPage(props) {
  const { modeDark, arreysWord } = props;

  return (
    <>
      <div className="container">
        <CreatedWords arreysWord={arreysWord} />
      </div>
      <FooterCheck modeDark={modeDark} />
    </>
  );
}
