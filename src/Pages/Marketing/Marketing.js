import React from "react";
import "./marketing.css";
import { Outlet } from "react-router-dom";
import Headersemail from "./Headersemail";

function Marketing() {
  return (
    <div>
      <Headersemail />
      <Outlet />
    </div>
  );
}

export default Marketing;
