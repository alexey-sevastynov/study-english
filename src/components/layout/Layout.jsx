import { Link, Outlet } from "react-router-dom";

import React from "react";

import Header from "../header/Header";

export default function Layout() {
  return (
    <div style={{ height: "calc(100vh - 80px)" }}>
      <Header />
      <Outlet />
    </div>
  );
}
