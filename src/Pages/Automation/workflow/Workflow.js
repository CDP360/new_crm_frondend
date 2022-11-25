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
        <div
          style={{
            width: "79.9%",
            backgroundColor: "white",
            height: "75vh",
            overflow: "auto",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <Table>
            <thead>
              <tr className="automation-table-heading">
                <th>Name</th>
                <th>Total Enrolled</th>
                <th>Active Enrolled</th>
                <th>Created</th>
                <th>Last Updated</th>
                <th></th>
                <th></th>
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
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 2</td>
                <td>1500</td>
                <td>900</td>
                <td>11 Oct, 2022 </td>
                <td>14 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 3</td>
                <td>900</td>
                <td>700</td>
                <td>05 Jun, 2022 </td>
                <td>21 Jul, 2022 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 4</td>
                <td>800</td>
                <td>500</td>
                <td>21 Nov, 2021 </td>
                <td>29 Nov, 2021 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 5</td>
                <td>1000</td>
                <td>200</td>
                <td>06 May, 2021 </td>
                <td>21 Jun, 2021 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 6</td>
                <td>1200</td>
                <td>900</td>
                <td>01 Jan, 2021 </td>
                <td>21 Nov, 2022 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr className="automation-table-body">
                <td>Demo 7</td>
                <td>1000</td>
                <td>2000</td>
                <td>01 Nov, 2020 </td>
                <td>21 Nov, 2020 </td>
                <td>
                  <ModeIcon />
                </td>
                <td>
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
