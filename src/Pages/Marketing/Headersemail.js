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
            width: "75%",
            justifyContent: "space-around",
          }}
        >
          <p
            style={{ marginBottom: "auto", marginTop: "auto" }}
          >
            Social Planner
          </p>
          <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{
              border: "none",
              backgroundColor: "#dfe3de",
              marginTop: "3%",
            }}
          >
            Email
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={Campaigns}>Camapign</Dropdown.Item>
            <Dropdown.Item onClick={Template}>Templates</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <p
            style={{ marginBottom: "auto", marginTop: "auto" }}
          >
            Templates
          </p>
          <p style={{ marginBottom: "auto", marginTop: "auto" }}>Trigger Links</p>
          <p style={{ marginBottom: "auto", marginTop: "auto" }}>Affiliate Manager</p>

        </div>
        <div className="automation-header-right">
        {headerbutton ? (
          <>
            <Button startIcon={<AddCircleOutlineIcon />} style={{ textTransform: "capitalize",backgroundColor: '#CE2232',marginRight:'2%',color:'white' }}>
              Campaign
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" startIcon={<AddCircleOutlineIcon />} style={{ textTransform: "capitalize" }}>
              Templates
            </Button>
          </>
        )}
        {/* <Button variant="primary" startIcon={<AddCircleOutlineIcon />}>
          Campaign
        </Button> */}
        <Button variant="outlined" startIcon={<FolderOpenIcon />} style={{ textTransform: "capitalize" }}>
          Folder
        </Button>
        </div>
      </div>
  );
}

export default Headersemail;
