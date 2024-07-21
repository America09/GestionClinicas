import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    console.log('Formulario enviado con éxito');
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Typography variant="h5" gutterBottom align="center" sx={{color: 'black', fontWeight: 'semibold'}}>
          Cambiar Contraseña
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            error={Boolean(error)}
            helperText={error}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Confirmar Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            error={Boolean(error)}
            helperText={error}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" align="center" style={{ marginTop: 8 }}>
              {error}
            </Typography>
          )}
          <Grid container justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                bgcolor: '#408D86',
                color: '#FFFFFF',
                '&:hover': { bgcolor: '#336B5B' },
                borderRadius: '20px',
                padding: { xs: '12px 24px', sm: '12px 20px' },
                width: '100%',
                maxWidth: '400px'
              }}
            >
              Enviar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default PasswordForm;
