import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './components/About';
import SignIn from './components/SignIn';
import Logo from './components/Logo';

const router = createBrowserRouter(
    [{
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: 'logo',
        element: <Logo />
    }


]
);




export default router;