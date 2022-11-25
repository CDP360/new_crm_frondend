import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import Filter from "../../Assests/Filter.svg";
import edit from "../../Assests/Group 152.svg";
import Delete from "../../Assests/Group 157.svg";
import copy from "../../Assests/Group 156.svg";
import path from "../../Assests/path.svg";
import vector from "../../Assests/Vector.svg";
function Templates() {
  const [hover, setHover] = useState(0);

  function All() {
    setHover(0);
  }
  function Draft() {
    setHover(1);
  }
  function Published() {
    setHover(2);
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
            onClick={All}
            className={`${hover === 0 ? "tableactive" : ""}`}
          >
            <p style={{ marginBottom: "auto", marginLeft: "10%" }}>All</p>
          </div>
          <div
            style={{
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
              cursor: "pointer",
            }}
            onClick={Draft}
            className={`${hover === 1 ? "tableactive" : ""}`}
          >
            <p style={{ marginBottom: "auto", marginLeft: "10%" }}>Draft</p>
          </div>
          <div
            style={{
              padding: "3.5%",
              borderBottom: "1px solid #dfe3de",
              cursor: "pointer",
            }}
            onClick={Published}
            className={`${hover === 2 ? "tableactive" : ""}`}
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
            textAlign: "center",
          }}
        >
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Execution Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Demo1</td>
                <td>800</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <img src={edit} />
                    <img src={Delete} />
                    <img src={copy} />
                    <img src={path} />
                    <img src={vector} />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Templates;
