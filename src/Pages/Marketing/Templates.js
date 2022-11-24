import React from "react";

import Table from "react-bootstrap/Table";
import Folder from "../../Assests/path.svg";
import edit from "../../Assests/Group 152.svg";
import Delete from "../../Assests/Group 157.svg";
import copy from "../../Assests/Group 156.svg";
import path from "../../Assests/path.svg";
import vector from "../../Assests/Vector.svg";
function Templates() {
  return (
    <div className="automation-body">
      <div className="automation-body-left">
        <div className="automation-left-filter">
          <img src={Folder} alt="Folder" />
          <p>Filters</p>
        </div>
        <hr style={{ marginTop: "-1%" }} />
        <div className="automation-left-option">
          <p>All</p>
        </div>
        <hr style={{ marginTop: "-2.5%" }} />
        <div className="automation-left-option">
          <p>Draft</p>
        </div>
        <hr style={{ marginTop: "-3.5%" }} />
        <div>
          <p className="automation-left-option">Published</p>
        </div>
        <hr style={{ marginTop: "-4%" }} />
      </div>
      <div className="automation-body-right" style={{ height: "518px" }}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>

              <th>Execution Date</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demo1</td>

              <td>800</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo2</td>

              <td>900</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo3</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo4</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo5</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo6</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo7</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
            <tr>
              <td>Demo8</td>

              <td>700</td>

              <td>
                <img src={edit} />
              </td>
              <td>
                <img src={Delete} />
              </td>
              <td>
                <img src={copy} />
              </td>
              <td>
                <img src={path} />
              </td>
              <td>
                <img src={vector} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Templates;
