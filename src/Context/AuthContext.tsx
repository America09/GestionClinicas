import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthState, AuthContextType } from '../Types/Auth';
import { jwtDecode } from 'jwt-decode';
const initialAuthState: AuthState = {
    token: null,
    isAuthenticated: false,
    permissions: [],
};

export const AuthContext = createContext<AuthContextType>({
    authState: initialAuthState,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>(initialAuthState);

    useEffect(() => {
        if (authState.token) {
            const decodedToken: any = jwtDecode(authState.token);
            setAuthState((prevState) => ({
                ...prevState,
                permissions: decodedToken.permissions ? decodedToken.permissions.split(',') : [],
            }));
        }
    }, [authState.token]);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        const decodedToken: any = jwtDecode(token);
        setAuthState({
            token,
            isAuthenticated: true,
            permissions: decodedToken.permissions ? decodedToken.permissions.split(',') : [],
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);