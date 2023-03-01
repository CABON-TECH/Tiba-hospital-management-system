import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

const Navigationbar = () => {
    return (
        <div className="navbar">
        <nav>
            <ul>
                <li>
                  <Link to="/Navigationbar">Home</Link> 
                </li>
                <li>
                    <Link to="/About">About</Link>

                </li>
                <li>
                    <Link to="/sign-in">Sign in</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
    }

    export default Navigationbar;