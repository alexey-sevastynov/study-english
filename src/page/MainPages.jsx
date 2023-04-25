import React from "react";

import Header from "../components/header/Header";
import AddWords from "../components/addWords/AddWords";

import FooterMain from "../components/footer/FooterMain";

export default function MainPages(props) {
  const {
    modeDark,
    textareaOne,
    textareaTwo,
    changeTextAreaOne,
    changeTextAreaTwo,
    cleanTextareaOne,
    cleanTextareaTwo,
    addedWordsInArray,
    reverseArray,
    arreysWord,
    checkForEmptiness,
    err,
    success,
    uniqueWords,
  } = props;
  return (
    <>
      <div className="container">
        <AddWords
          modeDark={modeDark}
          textareaOne={textareaOne}
          textareaTwo={textareaTwo}
          changeTextAreaOne={changeTextAreaOne}
          changeTextAreaTwo={changeTextAreaTwo}
          cleanTextareaOne={cleanTextareaOne}
          cleanTextareaTwo={cleanTextareaTwo}
          arreysWord={arreysWord}
          err={err}
          success={success}
        />
      </div>
      <FooterMain
        modeDark={modeDark}
        addedWordsInArray={addedWordsInArray}
        reverseArray={reverseArray}
        checkForEmptiness={checkForEmptiness}
        arreysWord={arreysWord}
        uniqueWords={uniqueWords}
      />
    </>
  );
}
