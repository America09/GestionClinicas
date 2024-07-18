// Context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { AuthState, AuthContextType } from '../Types/Auth';

const initialAuthState: AuthState = {
    token: null,
    isAuthenticated: false,
};

export const AuthContext = createContext<AuthContextType>({
    authState: initialAuthState,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>(initialAuthState);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setAuthState({
            token,
            isAuthenticated: true,
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
