import clientAxios from '../Config/Axios';
import { Permission } from '../Types/Roles';

export const getPermissions = async (): Promise<Permission[]> => {
    const response = await clientAxios.get<Permission[]>('Permissions');
    return response.data;
};
