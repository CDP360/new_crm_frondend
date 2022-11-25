import React, { useState } from "react";
import "./sidebar.css";
import Dashboard from "../../Assests/dashboard-white.svg";
import Automation from "../../Assests/automation-black.svg";
import emailblack from "../../Assests/email-black.svg";
import dashboardblack from "../../Assests/dashboard-black.svg";
import Marketing from "../../Assests/email-white.svg";
import { useNavigate } from "react-router-dom";
import automationwhite from "../../Assests/automation-white.svg";

function Sidebar() {
  const [step, setStep] = useState(0);

  const [image, setImage] = useState(0);

  const navigate = useNavigate();

  function dashboard() {
    setStep(0);
    navigate("");
    setImage(0);
  }

  function automation() {
    navigate("/automation");
    setStep(1);
    setImage(1);
  }
  function marketing() {
    navigate("/marketing");
    setStep(2);
    setImage(2);
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
          {image === 0 ? (
            <>
              <img src={dashboardblack} className="sidebar-img" />
            </>
          ) : (
            <>
              <img src={Dashboard} className="sidebar-img" />
            </>
          )}

          <p className="sidebar-name">Dashboard</p>
        </div>
        <div
          className={`dashboard-block ${step === 1 ? "active" : "deactive"} `}
          onClick={automation}
        >
          {image === 1 ? (
            <>
              {" "}
              <img src={Automation} className="sidebar-img" />
            </>
          ) : (
            <>
              <img src={automationwhite} className="sidebar-img" />
            </>
          )}

          <p className="sidebar-name">Automation</p>
        </div>
        <div
          className={`dashboard-block ${step === 2 ? "active" : "deactive"} `}
          onClick={marketing}
        >
          {image === 2 ? (
            <>
              <img src={emailblack} className="sidebar-img" />
            </>
          ) : (
            <>
              <img src={Marketing} className="sidebar-img" />
            </>
          )}

          <p className="sidebar-name">Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
