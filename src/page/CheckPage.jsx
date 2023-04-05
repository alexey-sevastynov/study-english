import React from "react";

import CreatedWords from "../components/checkWords/CheckWords";
import FooterCheck from "../components/footer/FooterCheck";

export default function CheckPage() {
  return (
    <div className="container">
      <CreatedWords />
      <FooterCheck />
    </div>
  );
}
