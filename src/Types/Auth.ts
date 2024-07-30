//Types/Auth.ts


export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    permissions: string[];
}

export interface AuthContextType {
    authState: AuthState;
    login: (token: string) => void;
    logout: () => void;
}


