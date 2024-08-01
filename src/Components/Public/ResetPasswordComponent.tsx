import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { handleResetPassword } from '../../Handlers/UserHandler';

const ResetPasswordComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');
    setToken(tokenFromUrl);
  }, [location.search]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!token) {
      Swal.fire('Error', 'Token inválido o no proporcionado', 'error');
      return;
    }

    try {
      const message = await handleResetPassword(token, password);
      Swal.fire('Éxito', message, 'success');
      navigate('/');
    } catch (error: any) {
      Swal.fire('Error', error.message || 'Error al restablecer la contraseña', 'error');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Restablecer Contraseña
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nueva Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <TextField
          label="Confirmar Nueva Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          error={!!error}
          helperText={error}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Restablecer Contraseña
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordComponent;
