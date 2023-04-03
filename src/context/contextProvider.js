import React,{createContext, useState} from 'react'
const contextProvider = createContext()
const ContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    return(
        <contextProvider.Provider value={{isAuth, setIsAuth}}>
            {children}
        </contextProvider.Provider>
    );
};

export {ContextProvider, contextProvider}

