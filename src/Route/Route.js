import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./../Components/MainContainer/MainContainer";
import Dashboard from "./../Pages/Dashboard/Dashboard";
import Automation from "./../Pages/Automation/Automation";
import Promotion from "../Pages/Dashboard/Promotion";
import Tablecampaign from "../Pages/Marketing/Tablecampaign";
import Templates from "../Pages/Marketing/Templates";
import Workflow from "../Pages/Automation/workflow/Workflow";
import Campaigns from "../Pages/Automation/campaigns/Campaigns";
import Marketing from './../Pages/Marketing/Marketing';

function Routers() {
  return (
    <div style={{height:'100vh' ,overflow:'hidden'}}>
      <BrowserRouter>
        <Routes >
          <Route path="" element={<MainContainer />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/automation" element={<Automation />}>
              <Route path="/automation" element={<Workflow />} />
              <Route path="/automation/Campaigns" element={<Campaigns />} />
            </Route>
            <Route path="/marketing" element={<Marketing />}>
              <Route path="/marketing" element={<Tablecampaign />} />
              <Route path="/marketing/templetes" element={<Templates />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
