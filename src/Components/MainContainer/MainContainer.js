import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div style={{width:'100%'}}>
        <Header/>
        <div style={{marginTop:'2%'}}>
        <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default MainContainer