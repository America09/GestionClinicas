/* import clientAxios from '../Config/Axios';
import { Role } from '../Types/Roles';

export const getRoles = async (): Promise<Role[]> => {
    const response = await clientAxios.get<Role[]>('/Role');
    console.log(response)
    return response.data;
};
 */
import clientAxios from '../Config/Axios';
import { Role } from '../Types/Roles';

export const getRoles = async (): Promise<Role[]> => {
    const response = await clientAxios.get<Role[]>('/Role');
    return response.data;
};

export const deleteRoleById = async (id: number): Promise<void> => {
    await clientAxios.delete(`/Role/${id}`);
};

export const updateRoleById = async (id: number, role: Role): Promise<void> => {
    await clientAxios.put(`/Role/${id}`, role);
};

export const addNewRole = async (role: Partial<Role>): Promise<void> => {
    await clientAxios.post('/Role', role);
};
