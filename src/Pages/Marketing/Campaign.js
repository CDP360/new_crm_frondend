import React from "react";
import "./marketing.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Outlet, useNavigate } from "react-router-dom";
import Headersemail from "./Headersemail";

function Campaign() {
  const navigate = useNavigate();
  return (
    <div>
      <Headersemail />
      <Outlet />
    </div>
  );
}

export default Campaign;
