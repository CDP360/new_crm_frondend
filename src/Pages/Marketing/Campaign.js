import React from "react";
import "./marketing.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Outlet, useNavigate } from "react-router-dom";
import Headersemail from "./Headersemail";
import Tablecampaign from "./Tablecampaign";

function Campaign() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#dfe3de" }}>
      {/* <div
        className="automation-container"
        style={{ display: "flex", position: "sticky", top: "60px" }}
      >
        <div
          className="automation-header-left"
          style={{ display: "flex", width: "71%" }}
        >
          <p>Social planner</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{
                border: "none",
                backgroundColor: "#dfe3de",
                marginTop: "-7%",
              }}
            >
              Email
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Camapign</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/marketing/templates")}>
                Templates
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>Template</p>
          <p>Trigger links</p>
          <p>Affiliate manager</p>
        </div>
        <div className="automation-header-right">
          <Button variant="primary" startIcon={<AddCircleOutlineIcon />}>
            Workflow
          </Button>
          <Button variant="outlined" startIcon={<FolderOpenIcon />}>
            Folder
          </Button>
        </div>
      </div> */}
      <Headersemail />
      <hr style={{ position: "sticky", top: "90px" }} />
      <Outlet />
    </div>
  );
}

export default Campaign;
