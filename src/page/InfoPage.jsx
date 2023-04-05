import React from "react";

import Footer from "../components/footer/Footer";
import Info from "../components/info/Info";

export default function InfoPage(props) {
  const { modeDark } = props;
  return (
    <div>
      <Info />
      <Footer modeDark={modeDark} />
    </div>
  );
}
