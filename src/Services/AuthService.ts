import axios from '../Config/Axios';
import { LoginRequest, LoginResponse, ApiResponse } from '../Types/Api';

export const login = async (loginRequest: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    try {
        const response = await axios.post<ApiResponse<LoginResponse>>('/Auth/login', loginRequest);
        return response.data;
    } catch (error : any) {
        return { success: false, message: error.response?.data?.message || 'Error desconocido', data: null as any };
    }
};
