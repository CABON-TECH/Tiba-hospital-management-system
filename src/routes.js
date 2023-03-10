import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './components/About';
import SignIn from './components/SignIn';
import Services from './components/Services';
import Contact from './components/Contact';



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
        path: '/services',
        element: <Services />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    



]
);




export default router;