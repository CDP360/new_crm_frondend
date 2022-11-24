import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import Folder from "../../Assests/path.svg";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useNavigate } from "react-router-dom";
function Headersemail() {
  const navigate = useNavigate();
  return (
    <div
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
            <Dropdown.Item onClick={() => navigate("/campaign")}>
              Camapign
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/campaign/templetes")}>
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
          Campaign
        </Button>
        <Button variant="outlined" startIcon={<FolderOpenIcon />}>
          Folder
        </Button>
      </div>
    </div>
  );
}

export default Headersemail;
