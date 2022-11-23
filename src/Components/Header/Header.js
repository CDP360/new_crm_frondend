import React from 'react'
import './Header.css'
import Notification from '../../Assests/notification.png'
import Search from '../../Assests/search.png'
import Setting from '../../Assests/settings.png'

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