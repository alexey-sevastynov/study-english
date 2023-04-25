import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import { col_1, col_2, uniqueArrWords } from "./uniqueWords";

import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import AddWords from "./components/addWords/AddWords";
import FooterMain from "./components/footer/FooterMain";
import CreatedWords from "./components/checkWords/CheckWords";
import FooterCheck from "./components/footer/FooterCheck";
import Game from "./components/game/Game";
import FooterGame from "./components/footer/FooterGame";
import Layout from "./components/layout/Layout";

import InfoPage from "./page/InfoPage";
import MainPages from "./page/MainPages";
import CheckPage from "./page/CheckPage";
import GamePage from "./page/GamePage";
import NotfoundPage from "./page/NotfoundPage";

class App extends React.Component {
  state = {
    modeDark: false,
    textareaOne: "",
    textareaTwo: "",
    arreysWord: [],
    duplicArreysWord: [],
    arrayWin: [],
    arrayLose: [],
    err: false,
    success: false,
    indexRandom: 0,

    inputWord: "",
    inputWordDuplicat: "",
    checkWin: false,
    checkLose: false,
    help: false,
  };

  changeTextAreaOne = (e) => {
    this.setState(() => {
      return {
        textareaOne: e.target.value,
      };
    });
  };

  changeTextAreaTwo = (e) => {
    this.setState(() => {
      return {
        textareaTwo: e.target.value,
      };
    });
  };

  cleanTextareaOne = () => {
    this.setState(() => {
      return {
        textareaOne: "",
        arreysWord: [],
      };
    });
  };

  cleanTextareaTwo = () => {
    this.setState(() => {
      return {
        textareaTwo: "",
        arreysWord: [],
      };
    });
  };

  toggleModeState = () => {
    this.setState(({ modeDark }) => {
      return {
        modeDark: !modeDark,
      };
    });
  };

  reverseArray = async () => {
    const strCol_1 = this.state.textareaOne;
    const strCol_2 = this.state.textareaTwo;

    await this.setState(() => {
      return {
        textareaOne: strCol_2,
        textareaTwo: strCol_1,
      };
    });

    await this.addedWordsInArray();
  };

  addedWordsInArray = async () => {
    const arrayOne = this.state.textareaOne.split("\n");
    const arrayTwo = this.state.textareaTwo.split("\n");

    const arrNew = [];

    for (let i = 0; i < arrayOne.length; i++) {
      arrNew.push({ id: i + 1, colOne: arrayOne[i], colTwo: arrayTwo[i] });
    }

    if (arrayOne[0] === "" || arrayTwo[0] === "0") {
      console.log("+");
    } else {
      await this.setState(() => {
        return {
          arreysWord: arrNew,
        };
      });
    }

    // check for success
    if (this.state.arreysWord.length > 1) {
      await this.setState(() => {
        return {
          success: true,
        };
      });
      await setTimeout(() => this.setState({ success: false }), 3000);
    }
  };

  uniqueWords = () => {
    const textareaOneNew = col_1.join().replace(/\,/g, "\n");
    const textareaTwoNew = col_2.join().replace(/\,/g, "\n");

    console.log(textareaOneNew);
    this.setState(() => {
      return {
        arreysWord: [...uniqueArrWords],
        textareaOne: textareaOneNew,
        textareaTwo: textareaTwoNew,
      };
    });
  };

  checkForEmptiness = () => {
    if (this.state.arreysWord.length === 0) {
      this.setState(() => {
        return {
          err: true,
        };
      });

      setTimeout(() => {
        this.setState({ err: false });
      }, 3000);
    }
  };

  showRandomWord = () => {
    const { arrayWin, duplicArreysWord } = this.state;

    const duplicWordCount = duplicArreysWord.length; // [{},{},{}]
    const newRanomIndex = Math.floor(Math.random() * (duplicWordCount - 1)); // random: 0,1,2... (1)

    if (arrayWin.length !== 0) {
      this.setState(() => {
        return {
          indexRandom: newRanomIndex,
        };
      });
    }
  };

  handleWordChange = (event) => {
    this.setState({ inputWord: event.target.value });

    // if pressed on keyboard 'enter'
    if (event.keyCode === 13) {
      this.checkForMatches();
    }

    // if pressed on keyboard 'ctrl'
    if (event.keyCode === 17) {
      this.showHelp();
    }
  };

  checkForMatches = () => {
    const { arrayWin, arrayLose, indexRandom, inputWord, duplicArreysWord } =
      this.state;

    const duplicWordCount = duplicArreysWord.length; // word count

    const word = duplicArreysWord[indexRandom].colTwo.toLowerCase().trim(); // colon_1 CheckPage.jsx
    const wordInput = inputWord.toLowerCase().trim(); // colon_2 INPUT CheckPage.jsx
    console.log(wordInput);

    const objCurrent = duplicArreysWord[indexRandom]; // current object

    //_______________________________________check LOSE

    if (word !== wordInput) {
      this.setState(() => {
        return {
          checkLose: true,
          checkWin: false,
          inputWord: "",
          inputWordDuplicat: wordInput,
        };
      });

      setTimeout(
        () => this.setState({ checkLose: false, checkWin: false }),
        3000
      );

      if (!arrayLose.includes(objCurrent)) {
        const newArreysWord = duplicArreysWord.filter(
          (item) => item !== objCurrent
        );

        this.setState(({ arrayLose }) => {
          return {
            arrayLose: [...arrayLose, objCurrent],
            duplicArreysWord: newArreysWord,
          };
        });
      }
    }

    //_______________________________________check WIN!!!

    if (word === wordInput) {
      this.setState(() => {
        return {
          checkWin: true,
          checkLose: false,
          inputWord: "",
        };
      });

      setTimeout(
        () => this.setState({ checkLose: false, checkWin: false }),
        3000
      );

      if (!arrayWin.includes(objCurrent)) {
        const newArreysWord = duplicArreysWord.filter(
          (item) => item !== objCurrent
        );

        this.setState(({ arrayWin }) => {
          return {
            arrayWin: [...arrayWin, objCurrent],
            duplicArreysWord: newArreysWord,
          };
        });
        this.showRandomWord();
      }

      // if (duplicWordCount === 0) {
      //   this.setState(({ arrayWin }) => {
      //     return {
      //       arrayWin: [...arrayWin, objCurrent],
      //       duplicArreysWord: [{ colOne: "win", colTwo: "win" }],
      //     };
      //   });
      // } else if (!arrayWin.includes(objCurrent)) {
      //   const newArreysWord = duplicArreysWord.filter(
      //     (item) => item !== objCurrent
      //   );

      //   this.setState(({ arrayWin }) => {
      //     return {
      //       arrayWin: [...arrayWin, objCurrent],
      //       duplicArreysWord: newArreysWord,
      //     };
      //   });
      //   // await this.showRandomWord();
      // }
    }
  };

  btnGame = () => {
    this.setState(({ arreysWord }) => {
      return {
        arrayLose: [],
        arrayWin: [],
        duplicArreysWord: arreysWord,
      };
    });
  };

  showHelp = () => {
    this.setState(() => {
      return {
        help: true,
      };
    });

    setTimeout(() => this.setState({ help: false }), 4000);
  };

  componentDidMount() {
    // this.showRandomWord();
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {
      modeDark,
      textareaOne,
      textareaTwo,
      arreysWord,
      err,
      success,
      indexRandom,
      inputWord,
      inputWordDuplicat,
      arrayWin,
      arrayLose,
      duplicArreysWord,
      checkLose,
      checkWin,
      help,
      showError,
    } = this.state;

    const styleMode = modeDark ? "app" : "app dark_mode";

    return (
      <div className={styleMode}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                toggleModeState={this.toggleModeState}
                modeDark={modeDark}
              />
            }
          >
            <Route index element={<InfoPage modeDark={modeDark} />} />
            <Route
              path="main"
              element={
                <MainPages
                  modeDark={modeDark}
                  textareaOne={textareaOne}
                  textareaTwo={textareaTwo}
                  changeTextAreaOne={this.changeTextAreaOne}
                  changeTextAreaTwo={this.changeTextAreaTwo}
                  cleanTextareaOne={this.cleanTextareaOne}
                  cleanTextareaTwo={this.cleanTextareaTwo}
                  addedWordsInArray={this.addedWordsInArray}
                  reverseArray={this.reverseArray}
                  arreysWord={arreysWord}
                  checkForEmptiness={this.checkForEmptiness}
                  err={err}
                  success={success}
                  uniqueWords={this.uniqueWords}
                />
              }
            />
            <Route
              path="check"
              element={
                <CheckPage
                  modeDark={modeDark}
                  arreysWord={arreysWord}
                  btnGame={this.btnGame}
                />
              }
            />
            <Route
              path="game"
              element={
                <GamePage
                  modeDark={modeDark}
                  arreysWord={arreysWord}
                  indexRandom={indexRandom}
                  handleWordChange={this.handleWordChange}
                  inputWord={inputWord}
                  inputWordDuplicat={inputWordDuplicat}
                  checkForMatches={this.checkForMatches}
                  duplicArreysWord={duplicArreysWord}
                  arrayWin={arrayWin}
                  arrayLose={arrayLose}
                  checkLose={checkLose}
                  checkWin={checkWin}
                  showHelp={this.showHelp}
                  help={help}
                />
              }
            />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
