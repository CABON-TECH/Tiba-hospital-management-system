import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHospitalSymbol} from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

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

  const {About} = useContext(AuthContext)
  const {Services} = useContext(AuthContext)
  const {Contact} = useContext(AuthContext)


  return (
    <>
    <div className="container">
      <nav className="navbar">
        <div className="navbarlogo">
          <button className="logobutton"onClick={handleLogoClick}><Link to="/"><FontAwesomeIcon icon={faHospitalSymbol} size="4x" /><span>Tiba <br/>Hospital</span> </Link></button>
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
      <div>
        <section className="content">
          <div className="content1">
            <h1>Healthcare for everyone</h1>
            <p>Our mission is to provide<br/> quality healthcare to all people in need,<br/> regardless of their ability to pay.</p>
            <button className="btn1"><Link to="/signin">Book an appointment</Link></button>
          </div>
          
        </section>
      </div>





    </div>

    </>
  )
}
