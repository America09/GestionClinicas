import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const TokenForm: React.FC = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!token) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    console.log('Formulario enviado con éxito');
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" gutterBottom align="center" sx={{ color: 'black', fontWeight: 'semibold' }}>
            Verificar Token
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Token"
              type="text"
              fullWidth
              margin="normal"
              value={token}
              error={Boolean(error)}
              helperText={error}
              onChange={(e) => setToken(e.target.value)}
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TokenForm;
