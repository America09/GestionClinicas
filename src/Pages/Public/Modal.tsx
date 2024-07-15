import RecuperarContrasenaModal from '../../Components/Public/RecupContraPage';
import { Button } from '@mui/material';
import { useState } from 'react';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpenModal}>Recuperar Contraseña</Button>
            <RecuperarContrasenaModal 
                open={isModalOpen} 
                onClose={handleCloseModal} 
                setOpenSignup={setSignupOpen} 
                setOpenLogin={setLoginOpen} 
            />
        </div>
    );
};

export default App;

