import React from "react";
import "./sidebar.css";
import Dashboard from "../../Assests/dashboard.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate=useNavigate()
  return (
    <div className="sidebar-maincontainer">
      <div>
        <p className="sidebar-heading">Banking</p>
      </div>
      <div>
        <div className="dashboard-block" onClick={()=>navigate('')}>
          <img src={Dashboard} className="sidebar-img" />
          <p className="sidebar-name">Dashboard</p>
        </div>
        <div className="dashboard-block" onClick={()=>navigate('/automation')}>
          <img src={Dashboard} className="sidebar-img" />
          <p className="sidebar-name">Automation</p>
        </div>
        <div className="dashboard-block" onClick={()=>navigate('/marketing')}>
          <img src={Dashboard} className="sidebar-img" />
          <p className="sidebar-name">Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
