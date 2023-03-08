import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/src/assets/logo.jpg'

export const Navbar = () => {
  const handleHomeClick = () => {
    
  };

  const handleAboutClick = () => {
    
  };

  const handleServicesClick = () => {
    
  };

  const handleContactClick = () => {
    
  };

  const handleLoginClick = () => {
    
  };

  const handleLogoClick = () => {
    
    
  };

  return (
    <>
    <div className="container">
      <nav className="navbar">
        <div className="navbarlogo">
          <button className="logobutton"onClick={handleLogoClick}><Link to="/"><img src={logo} alt="Logo" /></Link></button>
          <button className="loginbutton"onClick={handleLoginClick}><Link to="/signin">Login</Link></button>
        </div>
        <hr/>
        <div className="navbarlinks">
          <ul>
            <li>
              <button onClick={handleHomeClick}><Link to="/">Home</Link></button>
            </li>
            <li>
              <button onClick={handleAboutClick}><Link to="/about">About</Link></button>
            </li>
            <li>
              <button onClick={handleServicesClick}><Link to="/services">Services</Link></button>
            </li>
            <li>
              <button onClick={handleContactClick}><Link to="/contact">Contact</Link></button>
            </li>
          </ul>
        </div>

      </nav>
    </div>
    </>
  )
}
