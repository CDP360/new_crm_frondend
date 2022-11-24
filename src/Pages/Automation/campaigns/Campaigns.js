import React from "react";
import "./campaigns.css";
import Table from "react-bootstrap/Table";
import Folder from "../../../Assests/folder.svg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeIcon from "@mui/icons-material/Mode";

const Campaigns = () => {
  return (
    <div>
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
                <th>Total</th>
                <th>Active </th>
                <th>Completed</th>
                <th>Replied</th>
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

export default Campaigns;
