import React from "react";

import Game from "../components/game/Game";
import FooterGame from "../components/footer/FooterGame";

export default function GamePage(props) {
  const {
    modeDark,
    arreysWord,
    indexRandom,
    handleWordChange,
    inputWord,
    checkForMatches,
    duplicArreysWord,
    arrayWin,
    arrayLose,
    checkLose,
    checkWin,
    help,
    showHelp,
    inputWordDuplicat,
  } = props;

  return (
    <>
      <div className="container">
        <Game
          arreysWord={arreysWord}
          indexRandom={indexRandom}
          handleWordChange={handleWordChange}
          inputWord={inputWord}
          inputWordDuplicat={inputWordDuplicat}
          duplicArreysWord={duplicArreysWord}
          arrayWin={arrayWin}
          arrayLose={arrayLose}
          checkLose={checkLose}
          checkWin={checkWin}
          help={help}
        />
      </div>

      <FooterGame
        modeDark={modeDark}
        checkForMatches={checkForMatches}
        showHelp={showHelp}
      />
    </>
  );
}
