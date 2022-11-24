import React from "react";
import Table from "react-bootstrap/Table";
import Filter from "../../Assests/Filter.svg";
import edit from "../../Assests/Group 152.svg";
import Delete from "../../Assests/Group 157.svg";
import copy from "../../Assests/Group 156.svg";
import path from "../../Assests/path.svg";
import vector from "../../Assests/Vector.svg";

function Tablecampaign() {
  return (
    <div className="automation-body">
      <div className="automation-body-left">
        <div className="automation-left-filter">
          <img src={Filter} alt="Folder" />
          <p style={{marginBottom:'auto'}}>Filters</p>
        </div>
        <hr style={{marginTop:'auto',marginBottom:'auto'}}/>
        <div className="automation-left-option">
          <p style={{marginBottom:'auto',marginTop:'auto'}}>All</p>
        </div>
        <hr style={{marginTop:'auto',marginBottom:'auto'}} />
        <div className="automation-left-option">
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Draft</p>
        </div>
        <hr style={{marginTop:'auto',marginBottom:'auto'}} />
        <div className="automation-left-option">
          <p style={{marginTop:'auto',marginBottom:'auto'}} >Published</p>
        </div>
        <hr style={{marginTop:'auto',marginBottom:'auto'}} />
      </div>
      <div className="automation-body-right" style={{ height: "518px" }}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Schedule Date</th>
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
              <td>1000</td>
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
              <td>1500</td>
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
              <td>2000</td>
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
              <td>2000</td>
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
              <td>2000</td>
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
              <td>2000</td>
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
              <td>2000</td>
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
              <td>2000</td>
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

export default Tablecampaign;
