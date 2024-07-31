export interface Role {
    id: number;
    name: string;
    userNames: string[];
    permissions: string[];
}

export interface Permission {
    id: number;
    name: string;
}
