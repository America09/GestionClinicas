import { getPermissions, addPermission, updatePermission, deletePermission } from "../Services/PermisosServices";
import { Permission } from "../Types/Roles";

export const fetchPermissions = async (): Promise<Permission[]> => {
    try {
        const permissions = await getPermissions();
        return permissions;
    } catch (error) {
        console.error('Error al obtener los permisos:', error);
        throw error;
    }
};

export const createPermission = async (newPermission: Permission): Promise<Permission> => {
    try {
        const permission = await addPermission(newPermission);
        return permission;
    } catch (error) {
        console.error('Error al crear el permiso:', error);
        throw error;
    }
};

export const editPermission = async (id: number, updatedPermission: Permission): Promise<Permission> => {
    try {
        const permission = await updatePermission(id, updatedPermission);
        return permission;
    } catch (error) {
        console.error('Error al actualizar el permiso:', error);
        throw error;
    }
};

export const removePermission = async (id: number): Promise<void> => {
    try {
        await deletePermission(id);
    } catch (error) {
        console.error('Error al eliminar el permiso:', error);
        throw error;
    }
};
