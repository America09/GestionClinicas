//Types/Auth.ts


export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

export interface AuthContextType {
    authState: AuthState;
    login: (token: string) => void;
    logout: () => void;
}

export interface LoginRequest {
    email: string;
    password: string;
}
