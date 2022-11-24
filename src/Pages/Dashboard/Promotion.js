import { Tooltip } from "devextreme-react";
import { Export, Label } from "devextreme-react/bar-gauge";
import { Funnel } from "devextreme-react/funnel";
import React from "react";

function Promotion() {
  const dataSource = [
    { argument: "Send", value: 1200 },
    { argument: "Delivered", value: 1000 },
    { argument: "0pens", value: 500 },
    { argument: "Clicks", value: 200 },
  ];
  return (
    <div style={{ backgroundColor: "#dfe3de" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5%",
          position:'sticky',
          top:'7%'
        }}
      >
        <div style={{ display: "flex", width: "50%" }}>
          <p
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              fontWeight: "600",
            }}
          >
            Educational Loan
          </p>
          <p
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              fontWeight: "600",
              marginLeft: "10%",
            }}
          >
            CMP123
          </p>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button>11/06/2022</button>
          <button>11/06/2022</button>
        </div>
      </div>
      <div
        style={{
          padding: "1.5%",
          display: "flex",
          justifyContent: "space-between",
          height:'84vh',
          overflow:'auto',
          paddingBottom:'5%'
        }}
      >
        <div style={{ width: "55%", backgroundColor: "white", padding: "2%",borderRadius:'10px',height:'70vh' }}>
          <h3>Email Marketing Performance</h3>
          <div style={{ marginTop: "5%" }}>
            <Funnel
              id="funnel"
              dataSource={dataSource}
              // palette="Soft Pastel"
              argumentField="argument"
              valueField="value"
            >
              <Export enabled={true}/>
              <Tooltip enabled={true} format="fixedPoint" />
              <Label visible={true} position="inside" backgroundColor="none" />
            </Funnel>
          </div>
        </div>
        <div style={{ width: "43%",height:'110vh' }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                borderRadius: "10px",
                padding:'5%'
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Emails Sent</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>5,000</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                padding:'5%',
                borderRadius: "10px",
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Open</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>4,000</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:'5%' }}>
          <div
              style={{
                backgroundColor: "white",
                width: "47%",
                borderRadius: "10px",
                padding:'5%'
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Clicks</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>1,000</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                padding:'5%',
                borderRadius: "10px",
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Conversion</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>500</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:'5%' }}>
          <div
              style={{
                backgroundColor: "white",
                width: "47%",
                borderRadius: "10px",
                padding:'5%'
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Bounced</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>600</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                padding:'5%',
                borderRadius: "10px",
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Subscribed</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>1,000</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:'5%' }}>
          <div
              style={{
                backgroundColor: "white",
                width: "47%",
                borderRadius: "10px",
                padding:'5%'
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Subscribed</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>1,000</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                padding:'5%',
                borderRadius: "10px",
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>cost</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>Rs 2,00,000.00</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:'5%' }}>
          <div
              style={{
                backgroundColor: "white",
                width: "47%",
                borderRadius: "10px",
                padding:'5%'
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>Revenue</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>Rs 3,00,000.00</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "47%",
                padding:'5%',
                borderRadius: "10px",
              }}
            >
                <p style={{fontWeight:'600',fontSize:'16px'}}>CPC</p>
                <p style={{fontWeight:'600',fontSize:'20px'}}>Rs 1000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
