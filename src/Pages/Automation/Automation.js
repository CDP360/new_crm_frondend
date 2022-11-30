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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1%",
          paddingTop: "2%",
          backgroundColor: "#dfe3de",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "25%",
            justifyContent: "space-around",
          }}
        >
          <p
            style={{ marginBottom: "auto", marginTop: "auto" }}
            onClick={showWorkFlowBtn}
          >
            Workflow
          </p>
          <p
            style={{ marginBottom: "auto", marginTop: "auto" }}
            onClick={showCampaignbtn}
          >
            Campaigns
          </p>
          <p style={{ marginBottom: "auto", marginTop: "auto" }}>Trigger</p>
        </div>
        <div className="automation-header-right">
          <Button
            startIcon={<AddCircleOutlineIcon />}
            style={{ textTransform: "capitalize",backgroundColor: '#CE2232',marginRight:'2%',color:'white' }}
          >
            {workFlowBtn ? "Workflow" : "Campaigns"}
          </Button>

          <Button
            variant="outlined"
            startIcon={<FolderOpenIcon />}
            style={{ textTransform: "capitalize"}}
          >
            Folder
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Automation;
