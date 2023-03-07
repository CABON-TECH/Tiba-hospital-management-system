import React from 'react'
import { Link } from 'react-router-dom'

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
      <nav className="navbar">
        <div className="navbarlogo">
          <button onClick={handleLogoClick}><Link to="/">Logo</Link></button>
          <button onClick={handleLoginClick}><Link to="/signin">Login</Link></button>
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
    </>
  )
}
