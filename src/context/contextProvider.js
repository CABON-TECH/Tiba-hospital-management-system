import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const updatedAuthState = (newState) => {
        setIsAuthenticated(newState);
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, updatedAuthState}}>
            {children}
        </AuthContext.Provider>
    );
};

 export const MyProtectedPage = () => {
    const {isAuthenticated} = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>My Protected Page</h1>
        </div>
    );
};



