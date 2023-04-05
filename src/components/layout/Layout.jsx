import { Link, Outlet } from "react-router-dom";

import React from "react";

import Header from "../header/Header";

export default function Layout(props) {
  const { toggleModeState, modeDark } = props;

  return (
    <div style={{ height: "calc(100vh - 80px)" }}>
      <Header toggleModeState={toggleModeState} modeDark={modeDark} />
      <Outlet />
    </div>
  );
}
