import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useNavigate } from "react-router-dom";

function Headersemail() {
  const navigate = useNavigate();
  const [headerbutton, setHeaderButton] = useState(true);

  const Campaigns = () => {
    navigate("/marketing");
    setHeaderButton(true);
  };

  const Template = () => {
    navigate("/marketing/templetes");
    setHeaderButton(false);
  };
  return (
    <div
      className="automation-container"
      style={{
        display: "flex",
        position: "sticky",
        top: "45px",
        borderBottom: "2px solid gray",
        backgroundColor: "#dfe3de",
        zIndex: "99990000000000000090808098080",
      }}
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
            <Dropdown.Item onClick={Campaigns}>Camapign</Dropdown.Item>
            <Dropdown.Item onClick={Template}>Templates</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>Template</p>
        <p>Trigger links</p>
        <p>Affiliate manager</p>
      </div>
      <div className="automation-header-right">
        {headerbutton ? (
          <>
            <Button
              variant="primary"
              style={{ textTransform: "capitalize" }}
              startIcon={<AddCircleOutlineIcon />}
            >
              Campaign
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              style={{ textTransform: "capitalize" }}
              startIcon={<AddCircleOutlineIcon />}
            >
              Templates
            </Button>
          </>
        )}

        <Button
          variant="outlined"
          style={{ textTransform: "capitalize" }}
          startIcon={<FolderOpenIcon />}
        >
          Folder
        </Button>
      </div>
    </div>
  );
}

export default Headersemail;
