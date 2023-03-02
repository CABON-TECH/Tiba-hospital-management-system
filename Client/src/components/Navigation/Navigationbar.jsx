import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

const Navigationbar = () => {
    return (
        
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
    );
    }

    export default Navigationbar;