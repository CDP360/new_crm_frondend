import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./automation.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Button from "@mui/material/Button";
function Automation() {
  const navigate = useNavigate();

  const [workFlowBtn, SetbworkFlowBtn] = useState(true);

  const showCampaignbtn = () => {
    SetbworkFlowBtn(false);
    navigate("/automation/Campaigns");
  };
  const showWorkFlowBtn = () => {
    SetbworkFlowBtn(true);
    navigate("/automation");
  };
  return (
    <div
      style={{ backgroundColor: "#dfe3de", position: "sticky", top: "60px" }}
    >
      <div style={{ borderBottom: "2px solid rgba(49, 57, 73, 0.14)" }}>
        <div className="automation-container" style={{ display: "flex" }}>
          <div className="automation-header-left" style={{ display: "flex" }}>
            <p onClick={showWorkFlowBtn} style={{cursor:'pointer'}}>Workflow</p>
            <p onClick={showCampaignbtn} style={{cursor:'pointer'}}>Campaigns</p>
            <p>Triggers</p>
          </div>
          <div className="automation-header-right">
            <Button variant="primary" startIcon={<AddCircleOutlineIcon />}>
              {workFlowBtn ? "Workflow" : "Campaigns"}
            </Button>

            <Button variant="outlined" startIcon={<FolderOpenIcon />}>
              Folder
            </Button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Automation;
