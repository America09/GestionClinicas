// Handlers/AuthHandler.ts
import { login, createUser } from '../Services/AuthService';
import { AuthContextType } from '../Types/Auth';
import { LoginRequest, ApiResponse, LoginResponse, CreateUserRequest } from '../Types/Api';

export const handleLogin = async (
    loginRequest: LoginRequest,
    authContext: AuthContextType
): Promise<boolean> => {
    try {
        const response: ApiResponse<LoginResponse> = await login(loginRequest);
        console.log(response.token);

        if (response.token) {
            const token = response.token;
            localStorage.setItem('token', token);
            authContext.login(token);
            return true;
        } else {
            console.log(response);
            console.error('Error al iniciar sesión:', response.message);
            return false;
        }
    } catch (error: any) {
        console.error('Error al iniciar sesión:', {
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config,
        });
        return false;
    }
};


export const handleCreateUser = async (
    createUserRequest: CreateUserRequest
): Promise<boolean> => {
    try {
        const response: ApiResponse<any> = await createUser(createUserRequest);
        
        if (response.success) {
            console.log('Usuario creado exitosamente');
            return true;
        } else {
            console.error('Error al crear usuario:', response.message);
            return false;
        }
    } catch (error: any) {
        console.error('Error al crear usuario:', {
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config,
        });
        return false;
    }
};