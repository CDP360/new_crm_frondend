import React from "react";
import "./sidebar.css";
import Dashboard from "../../Assests/dashboard-active.svg";
import Automation from '../../Assests/Automation.svg';
import Marketing from '../../Assests/email.svg'
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar-maincontainer">
      <div>
        <p className="sidebar-heading">Banking</p>
      </div>
      <div>
        <div className="dashboard-block" onClick={() => navigate("")}>
          <img src={Dashboard} className="sidebar-img" />
          <p className="sidebar-name">Dashboard</p>
        </div>
        <div
          className="dashboard-block"
          onClick={() => navigate("/automation")}
        >
          <img src={Automation} className="sidebar-img" />
          <p className="sidebar-name">Automation</p>
        </div>
        <div className="dashboard-block" onClick={() => navigate("/campaign")}>
          <img src={Marketing} className="sidebar-img" />
          <p className="sidebar-name">Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
