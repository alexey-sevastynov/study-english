import React from "react";

import Game from "../components/game/Game";
import FooterGame from "../components/footer/FooterGame";

export default function GamePage(props) {
  const { modeDark } = props;
  return (
    <>
      <div className="container">
        <Game />
      </div>

      <FooterGame modeDark={modeDark} />
    </>
  );
}
