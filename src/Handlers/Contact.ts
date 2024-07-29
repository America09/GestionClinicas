import { ContactMen } from '../Services/Contact'; 
import { ContactForm } from '../Types/Contact'; 


export const handleContactSubmission = async (contactMessage: ContactForm) => {
  try {
    const response = await ContactMen(contactMessage.name, contactMessage.email, contactMessage.message);
    console.log('Mensaje recibido:', response); 
    return response;
  } catch (error) {
    console.error('Error al enviar el mensaje:', error); 
    throw error;
  }
};
