import clientAxios from '../Config/Axios';
import { Permission } from '../Types/Roles';

export const getPermissions = async (): Promise<Permission[]> => {
    const response = await clientAxios.get<Permission[]>('/Permissions');
    return response.data;
};

export const addPermission = async (newPermission: Permission): Promise<Permission> => {
    const response = await clientAxios.post<Permission>('/Permissions', newPermission);
    return response.data;
};

export const updatePermission = async (id: number, updatedPermission: Permission): Promise<Permission> => {
    const response = await clientAxios.put<Permission>(`/Permissions/${id}`, updatedPermission);
    return response.data;
};

export const deletePermission = async (id: number): Promise<void> => {
    await clientAxios.delete(`/Permissions/${id}`);
};
