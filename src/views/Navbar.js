import React from 'react'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarlogo">
          <h1>{Logo}</h1>
          <h1>login</h1>
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
