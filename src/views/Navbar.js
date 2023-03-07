import React from 'react'
import logo from '/logo.svg'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarlogo">
          <div className="logo">
            <img src={logo} alt="logo image" className='img-logo' />
            <div className="italic">
              <i>Because we care</i>
            </div>
          </div>
          <h1 className='login'>login</h1>
        </div>
        <hr/>
        <div className="navbarlinks">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

      </nav>
    </>
  )
}
