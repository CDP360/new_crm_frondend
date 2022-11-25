import React, { useState } from "react";
import "./workflow.css";
import Table from "react-bootstrap/Table";
import Filter from "../../../Assests/Filter.svg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeIcon from "@mui/icons-material/Mode";

const Workflow = () => {
  const [state, setState] = useState(0);

  function All() {
    setState(0);
  }
  function Draft() {
    setState(1);
  }
  function published() {
    setState(2);
  }

  return (
    <div style={{ backgroundColor: "#dfe3de", padding: "2%", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "20%",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
            }}
          >
            <img src={Filter} alt="Folder" style={{ marginLeft: "5%" }} />
            <p style={{ marginBottom: "auto", marginLeft: "5%" }}>Filters</p>
          </div>
          <div
            style={{
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
              cursor: "pointer",
            }}
            className={`${state === 0 ? "filter-sidebar" : ""}`}
            onClick={All}
          >
            <p
              style={{
                marginBottom: "auto",
                marginLeft: "10%",
                cursor: "pointer",
              }}
            >
              All
            </p>
          </div>
          <div
            style={{
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
              cursor: "pointer",
            }}
            className={`${state === 1 ? "filter-sidebar" : ""}`}
            onClick={Draft}
          >
            <p style={{ marginBottom: "auto", marginLeft: "10%" }}>Draft</p>
          </div>
          <div
            style={{
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
              cursor: "pointer",
            }}
            className={`${state === 2 ? "filter-sidebar" : ""}`}
            onClick={published}
          >
            <p style={{ marginBottom: "auto", marginLeft: "10%" }}>Published</p>
          </div>
        </div>
        <div style={{width:'79.9%',backgroundColor: 'white',height:'75vh',overflow:'auto',borderTopRightRadius:'5px',borderBottomRightRadius:'5px',textAlign:'center'}}>
          <Table>
            <thead>
              <tr className="automation-table-heading">
                <th>Name</th>
                <th>Total Enrolled</th>
                <th>Active Enrolled</th>
                <th>Created</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 1</td>
                <td>1000</td>
                <td>800</td>
                <td>21 Nov, 2022 </td>
                <td>30 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
