import React from "react";
import "./automation.css";
import Table from "react-bootstrap/Table";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Button from "@mui/material/Button";
import Dashboard from "../../Assests/dashboard.png";
import Folder from "../../Assests/folder.svg";
function Automation() {
  return (
    <div style={{ backgroundColor: "#dfe3de" }}>
      <div className="automation-container" style={{ display: "flex" }}>
        <div className="automation-header-left" style={{ display: "flex" }}>
          <p>Workflow</p>
          <p>Campaigns</p>
          <p>Triggers</p>
        </div>
        <div className="automation-header-right">
          <Button variant="primary" startIcon={<AddCircleOutlineIcon />}>
            Workflow
          </Button>
          <Button variant="outlined" startIcon={<FolderOpenIcon />}>
            Folder
          </Button>
        </div>
      </div>
      <div className="automation-body">
        <div className="automation-body-left">
          <div className="automation-left-filter">
            <img src={Folder} alt="Folder" />
            <p className="automation-filter-p">Filters</p>
          </div>
          <div className="automation-left-option">
            <p>All</p>
          </div>
          <hr />
          <div className="automation-left-option">
            <p>Draft</p>
          </div>
          <hr />
          <div>
            <p className="automation-left-option">Published</p>
          </div>
          <hr />
        </div>
        <div className="automation-body-right">
          <Table>
            <thead>
              <tr className="automation-table-heading">
                <th>Name</th>
                <th>Total Enrolled</th>
                <th>Active Enrolled</th>
                <th>Created</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
              </tr>
              <tr className="automation-table-body">
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr className="automation-table-body">
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
              <tr className="automation-table-body">
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
              <tr className="automation-table-body">
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
              <tr className="automation-table-body">
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
              <tr className="automation-table-body">
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Automation;
