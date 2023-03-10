
export const useStateContext = () => useContext(stateContext);
import React, {createContext, useState, } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, login}}>
            {children}
        </AuthContext.Provider>
    );
};



export {AuthContext, AuthProvider};
