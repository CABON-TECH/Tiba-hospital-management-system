import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <nav>
            <ul>
                <li>
                  <link to="/Navigationbar">Home</link> 
                </li>
                <li>
                    <link to="/About">About</link>

                </li>
                <li>
                    <link to="/sign-in">Sign in</link>
                </li>
            </ul>
        </nav>
    );
    }

    export default Navigationbar;