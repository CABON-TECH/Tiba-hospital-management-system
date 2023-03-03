import {createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './components/Homepage.js';
import About from './components/About.js';
import SignUp from './components/SignUp.js';
import React from 'react';


const router = createBrowserRouter([    
    { path: '/', element: <App /> },
    { path: '/home', element: <HomePage /> },
    { path: '/about', element: <About /> },
    { path: '/sign-up', element: <SignUp /> },
]);


export default router;