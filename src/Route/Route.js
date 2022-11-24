import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./../Components/MainContainer/MainContainer";
import Dashboard from "./../Pages/Dashboard/Dashboard";
import Automation from "./../Pages/Automation/Automation";
import Marketing from "./../Pages/Marketing/Marketing";
import Templates from "../Pages/Marketing/Templates";
import Campaign from "./../Pages/Marketing/Campaign";
import Tablecampaign from "./../Pages/Marketing/Tablecampaign";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainContainer />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/campaign" element={<Campaign />}>
              <Route path="/campaign" element={<Tablecampaign />} />
              <Route path="/campaign/templetes" element={<Templates />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
