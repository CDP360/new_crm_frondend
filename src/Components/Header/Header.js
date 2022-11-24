import React from 'react'
import './Header.css'
import Notification from '../../Assests/Group 2.svg'
import Search from '../../Assests/Group 4.svg'
import Setting from '../../Assests/Group 1.svg'

function Header() {
  return (
    <div className="header-container">
      <div className="header-card">
        <img src={Search} className="notification-img" />
        <img src={Notification} className="notification-img" />
        <img src={Setting} className="notification-img" />
      </div>
    </div>
  )
}

export default Header