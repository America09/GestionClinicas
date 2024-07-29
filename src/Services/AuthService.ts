import axios from '../Config/Axios';
import { LoginRequest, LoginResponse, ApiResponse, CreateUserRequest } from '../Types/Api';

export const login = async (loginRequest: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    try {
        const response = await axios.post<ApiResponse<LoginResponse>>('/Auth/login', loginRequest);
        return response.data;
    } catch (error : any) {
        return { success: false, message: error.response?.data?.message || 'Error desconocido', data: null as any };
    }
};

export const createUser = async (createUserRequest: CreateUserRequest): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<ApiResponse<any>>('/Users', createUserRequest);
        return response.data;
    } catch (error: any) {
        return { success: false, message: error.response?.data?.message || 'Error desconocido', data: null as any };
    }
};