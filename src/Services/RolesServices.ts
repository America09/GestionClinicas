import clientAxios from '../Config/Axios';
import { Role } from '../Types/Roles';

export const getRoles = async (): Promise<Role[]> => {
    const response = await clientAxios.get<Role[]>('/Role');
    console.log(response)
    return response.data;
};
