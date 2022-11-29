import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useNavigate } from "react-router-dom";
import "./headersemail.css";

function Headersemail() {
  const navigate = useNavigate();
  const [headerbutton, setHeaderButton] = useState(true);

  const [data, setData] = useState(0);

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
          style={{
            marginBottom: "auto",
            marginTop: "auto",
          }}
        >
          Social Planner
        </p>

        <div
          onClick={() => setData(0)}
          className={`${data === 0 ? "border-data1" : "border-deactive"}`}
        >
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
        </div>

        <p
          style={{
            marginBottom: "auto",
            marginTop: "auto",
          }}
          onClick={() => setData(1)}
          className={`${data === 1 ? "border-data" : "border-deactive"}`}
        >
          Templates
        </p>
        <p
          style={{
            marginBottom: "auto",
            marginTop: "auto",
          }}
          onClick={() => setData(2)}
          className={`${data === 2 ? "border-data" : "border-deactive"}`}
        >
          Trigger Links
        </p>
        <p
          style={{
            marginBottom: "auto",
            marginTop: "auto",
          }}
          onClick={() => setData(3)}
          className={`${data === 3 ? "border-data" : "border-deactive"}`}
        >
          Affiliate Manager
        </p>
      </div>
      <div className="automation-header-right">
        {headerbutton ? (
          <>
            <Button
              variant="primary"
              startIcon={<AddCircleOutlineIcon />}
              style={{ textTransform: "capitalize" }}
            >
              Campaign
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              startIcon={<AddCircleOutlineIcon />}
              style={{ textTransform: "capitalize" }}
            >
              Templates
            </Button>
          </>
        )}

        <Button
          variant="outlined"
          startIcon={<FolderOpenIcon />}
          style={{ textTransform: "capitalize" }}
        >
          Folder
        </Button>
      </div>
    </div>
  );
}

export default Headersemail;
