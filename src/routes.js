import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './components/About';
import SignIn from './components/SignIn';
import Services from './components/Services';
import Contact from './components/Contact';
import ProtectedRoute from './components/protectedRoute';
import { ContextProvider } from './context/contextProvider';




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
    {
        path: '/protected',
        element: <ProtectedRoute />
    },
    {
        path: '/contextProvider',
        element: <ContextProvider />
    }
    



]
);




export default router;