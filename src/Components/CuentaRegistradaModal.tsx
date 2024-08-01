import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleConfirmAccount } from '../Handlers/UserHandler';
import Swal from 'sweetalert2';

const CuentaRegistradaExito: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [code, setCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const initialCode = searchParams.get('code');
        if (initialCode) {
            setCode(initialCode);
        }
    }, [searchParams]);

    const handleConfirm = async () => {
        setLoading(true);
        try {
            const message = await handleConfirmAccount(code);
            Swal.fire('Éxito', message, 'success');
            setCode(''); // Resetea el formulario
        } catch (error: any) {
            Swal.fire('Error', error.message || 'Error al confirmar la cuenta.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '5vh' }}>
            <Paper sx={{ padding: 4, textAlign: 'center', width: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Confirmar Cuenta
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            label="Código de Confirmación"
                            type="text"
                            fullWidth
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            disabled={loading}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#43A49B',
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        bgcolor: '#51C5BA',
                                    },
                                }}
                                onClick={handleConfirm}
                                disabled={loading || !code}
                            >
                                {loading ? 'Confirmando...' : 'Confirmar Cuenta'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default CuentaRegistradaExito;
