import "./info.css";

import {
  infoDark,
  info,
  mode,
  sun,
  menuDark,
  menu,
  further,
  furtherDark,
  reverse,
  reverseDark,
  wrire,
  wrireDark,
  game,
  gameDark,
  exampleDark_1,
  exampleDark_2,
  exampleDark_3,
  exampleDark_4,
  example_1,
  example_2,
  example_3,
  example_4,
  exampleDarkMob_1,
  exampleDarkMob_2,
  exampleDarkMob_3,
  exampleDarkMob_4,
  exampleMob_1,
  exampleMob_2,
  exampleMob_3,
  exampleMob_4,
} from "./image.js";

// import infoDark from "../header/icon/infoDark.png";
// import info from "../header/icon/info.png";
// import mode from "../header/icon/moon.png";
// import sun from "../header/icon/sun.png";
// import menuDark from "../header/icon/menuDark.png";
// import menu from "../header/icon/menu.png";
// import further from "../footer/icon/further.png";
// import furtherDark from "../footer/icon/furtherDark.png";
// import reverse from "../footer/icon/reverse.png";
// import reverseDark from "../footer/icon/reverseDark.png";
// import wrire from "../footer/icon/write.png";
// import wrireDark from "../footer/icon/writeDark.png";
// import game from "../footer/icon/game.png";
// import gameDark from "../footer/icon/gameDark.png";

// import exampleDark_1 from "./img/1.jpg";
// import exampleDark_2 from "./img/2.jpg";
// import exampleDark_3 from "./img/3.jpg";
// import exampleDark_4 from "./img/4.jpg";
// import example_1 from "./img/1a.jpg";
// import example_2 from "./img/2a.jpg";
// import example_3 from "./img/3a.jpg";
// import example_4 from "./img/4a.jpg";

// import exampleDarkMob_1 from "./img/1-mob.jpg";
// import exampleDarkMob_2 from "./img/2-mob.jpg";
// import exampleDarkMob_3 from "./img/3-mob.jpg";
// import exampleDarkMob_4 from "./img/4-mob.jpg";
// import exampleMob_1 from "./img/1a-mob.jpg";
// import exampleMob_2 from "./img/2a-mob.jpg";
// import exampleMob_3 from "./img/3a-mob.jpg";
// import exampleMob_4 from "./img/4a-mob.jpg";

const data = [
  {
    stage: "Stage 1.",
    text: "Please, read the rules of the game. click on the icon :",
    icon: { sun: info, dark: infoDark },
    render: null,
  },
  {
    stage: "Stage 2.",
    text: "Select Day or Night mode, click on the icon :",
    icon: { dark: mode, sun: sun },
    render: null,
  },
  {
    stage: "Stage 3.",
    text: "Go to the game settings by clicking on the icon :",
    icon: {
      iconOneDark: menuDark,
      iconOneSun: menu,
      iconTwoDark: furtherDark,
      iconTwoSun: further,
    },
    mode,
    render: 1,
  },
  {
    stage: "Stage 4.",
    text: "Stage 4. There are two columns in front of you. Fill them in. The first column write the words you want to learn (for example English words). The second column is for the translation of these words (for example, Ukrainian words). An important rule is to write the words in a column using the 'ENTER' key, see the example below:",
    icon: { dark: null, sun: null },
    img: { dark: exampleDark_1, sun: example_1 },
    imgMob: { dark: exampleDarkMob_1, sun: exampleMob_1 },
    render: 2,
  },
  {
    stage: "Stage 5.",
    text: "The number of words in the first column must equal the number of words in the second column. Then click on the add icon:",
    icon: { dark: wrireDark, sun: wrire },
    img: { dark: exampleDark_2, sun: example_2 },
    imgMob: { dark: exampleDarkMob_2, sun: exampleMob_2 },
    render: 2,
  },
  {
    stage: "Stage 6.",
    text: "The number of words in the first column must equal the number of words in the second column. Then click on the “add” icon:",
    icon: { dark: reverseDark, sun: reverse },
    img: { dark: exampleDark_3, sun: example_3 },
    imgMob: { dark: exampleDarkMob_3, sun: exampleMob_3 },
    render: 2,
  },
  {
    stage: "Stage 7.",
    text: "Check if everything is correct ? If yes. Then click the “study!” icon",
    icon: { dark: gameDark, sun: game },
    img: { dark: exampleDark_4, sun: example_4 },
    imgMob: { dark: exampleDarkMob_4, sun: exampleMob_4 },
    render: 2,
  },
  {
    stage: "Stage 8.",
    text: "At last ! Try ! Let's go play ! ! !",
    icon: { dark: null, sun: null },
    render: null,
  },
];

export default function Info({ modeDark }) {
  return (
    <div className="info">
      <p>
        Hello guys! This is my web-application . I developed application for
        learn english words written yourself you.
      </p>

      <ul className="info-list">
        {data.map((stage) => (
          <ItemStage key={stage.stage} {...stage} modeDark={modeDark} />
        ))}
      </ul>
    </div>
  );
}

const ItemStage = ({ stage, text, render, modeDark, icon, img, imgMob }) => {
  if (render === 1) {
    return (
      <RenderOne stage={stage} text={text} icon={icon} modeDark={modeDark} />
    );
  }

  if (render === 2) {
    return (
      <RenderTwo
        stage={stage}
        text={text}
        icon={icon}
        modeDark={modeDark}
        img={img}
        imgMob={imgMob}
      />
    );
  }

  const showIcon = modeDark ? icon.sun : icon.dark;
  return (
    <>
      <li className="info-p-img">
        <p>
          <b className="step">{stage}</b> {text}
        </p>
        {icon.sun && (
          <img
            className="icon"
            src={showIcon}
            width={30}
            height={30}
            alt="icon"
          />
        )}
      </li>
      <br />
    </>
  );
};

function RenderOne({ stage, text, modeDark, icon }) {
  const iconFirst = modeDark ? icon.iconOneSun : icon.iconOneDark;
  const iconSecond = modeDark ? icon.iconTwoSun : icon.iconTwoDark;
  return (
    <>
      <li className="info-p-img">
        <p>
          <b className="step">{stage}</b> {text}
        </p>
        <img
          className="icon"
          src={iconFirst}
          width={30}
          height={30}
          alt="info"
        />
        <p className="or">or :</p>
        <img
          className="icon-two"
          src={iconSecond}
          width={30}
          height={30}
          alt="icon"
        />
      </li>
      <br />
    </>
  );
}

function RenderTwo({ stage, text, modeDark, icon, img, imgMob }) {
  const showIcon = modeDark ? icon.sun : icon.dark;
  const showImg = modeDark ? img.sun : img.dark;
  const showImgMob = modeDark ? imgMob.sun : imgMob.dark;
  const stylesColor = modeDark ? { color: "black" } : { color: "white" };
  return (
    <>
      <li className="info-p-img">
        <p>
          <b className="step">{stage}</b> {text}
          {icon.sun && (
            <img
              className="icon-inline"
              src={showIcon}
              width={30}
              height={30}
              alt="fill"
            />
          )}
        </p>
        <div className="block-img-example">
          <ul style={stylesColor} className="block-img-example-title">
            <li>The first column</li>
            <li>The second column</li>
          </ul>
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={showImgMob}
              style={{ width: "100%", boxSizing: "border-box" }}
            />
            <img src={showImg} alt="example.jpg" />
          </picture>
        </div>
      </li>
      <br />
    </>
  );
}
