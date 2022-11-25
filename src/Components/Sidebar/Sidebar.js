import React, { useState } from "react";
import "./sidebar.css";
import Dashboard from "../../Assests/dashboard-active.svg";
import Automation from "../../Assests/Automation.svg";
import Marketing from "../../Assests/email.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  function dashboard() {
    setStep(0);
    navigate("");
  }

  function automation() {
    navigate("/automation");
    setStep(1);
  }
  function marketing() {
    navigate("/marketing");
    setStep(2);
  }
  return (
    <div className="sidebar-maincontainer">
      <div>
        <p className="sidebar-heading">Banking</p>
      </div>
      <div>
        <div
          className={`dashboard-block ${step === 0 ? "active" : "deactive"} `}
          onClick={dashboard}
        >
          <img src={Dashboard} className="sidebar-img" />
          <p className="sidebar-name">Dashboard</p>
        </div>
        <div
          className={`dashboard-block ${step === 1 ? "active" : "deactive"} `}
          onClick={automation}
        >
          <img src={Automation} className="sidebar-img" />
          <p className="sidebar-name">Automation</p>
        </div>
        <div
          className={`dashboard-block ${step === 2 ? "active" : "deactive"} `}
          onClick={marketing}
        >
          <img src={Marketing} className="sidebar-img" />
          <p className="sidebar-name">Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
