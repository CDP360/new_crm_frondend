import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from './../Components/MainContainer/MainContainer';
import Dashboard from './../Pages/Dashboard/Dashboard';
import Automation from './../Pages/Automation/Automation';
import Marketing from './../Pages/Marketing/Marketing';

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainContainer />}>
             <Route path="" element={<Dashboard />}/>
             <Route path="/automation" element={<Automation />}/>
             <Route path="/marketing" element={<Marketing />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
