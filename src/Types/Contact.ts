export interface ApiResponse {
    message: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface ContactRecibido {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
    read: boolean; 
}


