import React from "react";

import Footer from "../components/footer/Footer";
import Info from "../components/info/Info";

export default function InfoPage(props) {
  const { modeDark } = props;
  return (
    <>
      <div className="container-scroll">
        <Info modeDark={modeDark} />
      </div>
      <Footer modeDark={modeDark} />
    </>
  );
}
