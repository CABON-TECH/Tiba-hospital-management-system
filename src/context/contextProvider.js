import React, {createElement, useContext, useState} from "react";


const stateContext = React.createContext({
    currentUser: null,
    token: null,
    setCurrentUser: () => { },
    setToken: ()=>{}
});


// Path: src/context/contextProvider.js
export const contextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("John Doe");
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");

        }

    }
    return (<stateContext.Provider value={{ currentUser, setCurrentUser, token, setToken }}>
        {children}
    </stateContext.Provider>)
}

export const useStateContext = () => useContext(stateContext);
