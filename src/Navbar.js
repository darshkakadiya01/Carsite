import React from 'react'
import './App.css';

function Navbar() {
  return (
    <div className='Navbar-main-cntainer'>
      <nav className="navbar">
        <img
          src="logo-car-detailing-brand_126903-118__1_-removebg-preview.png"
          alt="Logo"
          className="navbar-logo"
        />  

        <ul className="navbar-menu">
          <li><a href="#home"><b>Home</b></a></li>
          <li><a href="#cars"><b>Cars</b></a></li>
          <li><a href="#service"><b>Service</b></a></li>
          <li><a href="#about"><b>About</b></a></li>
          <li><a href="#contact"><b>Contact</b></a></li>
        </ul>

        <button className="navbar-btn"><b>Book a car</b></button>
      </nav>
    </div>
  )
}

export default Navbar
