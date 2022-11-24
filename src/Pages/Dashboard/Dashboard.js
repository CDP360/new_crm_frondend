import React from "react";
import Table from "react-bootstrap/Table";
import './Dashboard.css'
import c3 from 'c3'
import 'c3/c3.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate=useNavigate()
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        type: "line",
      },
    });
  });
  React.useEffect(() => {
    c3.generate({
      bindto: "#bar",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        type: "bar",
      },
    });
  });
  return (
    <div style={{height:'93vh', backgroundColor: "#dfe3de", padding: "1.5%" , overflow:'auto'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{backgroundColor:'white',padding:'3%',width:'18%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Emails Sent</p>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Rs 2,00,000</p>
        </div>
        <div style={{backgroundColor:'white',padding:'3%',width:'18%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Open</p>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Rs 1,00,000</p>
        </div>
        <div style={{backgroundColor:'white',padding:'3%',width:'18%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Clicks</p>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Rs 10,000</p>
        </div>
        <div style={{backgroundColor:'white',padding:'3%',width:'18%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Emails Sent</p>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Rs 2,00,000</p>
        </div>
        <div style={{backgroundColor:'white',padding:'3%',width:'18%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Emails Sent</p>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Rs 2,00,000</p>
        </div>
      </div>
      <div style={{backgroundColor:'white',padding:'2%',marginTop:'2%',borderRadius:'10px'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Account Type : Personal Account</p>
          <div style={{display:'flex',justifyContent:'space-between',width:'17%'}}>
            <select style={{backgroundColor:'white',borderRadius:'5px'}}>
              <option>Email sent</option>
            </select>
            <select style={{backgroundColor:'white',borderRadius:'5px'}}>
              <option>Click rate</option>
            </select>
          </div>
        </div>
        <div id="chart"></div>
        
      </div>
      <div style={{backgroundColor:'white',padding:'2%',marginTop:'2%',borderRadius:'10px'}}>
          <p style={{marginTop:'auto',marginBottom:'auto'}}>Account Type : Personal Account</p>
        <div id="bar"></div>
      </div>
      <div className="table-container">
        <h5>Promotions</h5>
          <Table>
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Sent</th>
                <th>Delivered</th>
                <th>No.of.open</th>
                <th>No.of.clicks</th>
                <th>Costs</th>
                <th>CPC</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={()=>navigate('/promotion')}>
                <td>Education Loan</td>
                <td>1000</td>
                <td>800</td>
                <td>500</td>
                <td>200</td>
                <td>2,00,000.00</td>
                <td>Rs. 200</td>
              </tr>
              <tr>
                <td>Home Loan</td>
                <td>1500</td>
                <td>700</td>
                <td>500</td>
                <td>200</td>
                <td>2,00,000.00</td>
                <td>Rs. 200</td>
              </tr>
              <tr>
                <td>Personal Loan</td>
                <td>1000</td>
                <td>800</td>
                <td>400</td>
                <td>200</td>
                <td>2,00,000.00</td>
                <td>Rs. 200</td>
              </tr>
            </tbody>
          </Table>
          <p style={{textAlign:'center'}}>Load More</p>
        </div>
    </div>
  );
}

export default Dashboard;
