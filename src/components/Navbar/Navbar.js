import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/logo2.png' // Logo resmini içe aktar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <a className="logotext" href="#home">
          MEG Studio
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
