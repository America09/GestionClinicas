import clientAxios from '../Config/Axios';
import { User } from '../Types/Api';

export const getUserProfile = async (): Promise<User> => {
    const response = await clientAxios.get<User>('/api/User/profile');
    return response.data;
};