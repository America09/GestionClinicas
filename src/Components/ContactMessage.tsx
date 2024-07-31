import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchContactRecords, deleteContactMessage } from '../Services/Contact';
import { ContactRecibido } from '../types/Contact';
import Swal from 'sweetalert2';

const ContactMessage: React.FC = () => {
  const [messages, setMessages] = useState<ContactRecibido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewedMessages, setViewedMessages] = useState<Set<string>>(new Set());

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchContactRecords();
        setMessages(data);
      } catch (error) {
        setError('Error al cargar los mensajes');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#43A49B',
      cancelButtonColor: '#f00',
      confirmButtonText: 'Sí, eliminar'
    });

    if (result.isConfirmed) {
      try {
        await deleteContactMessage(id);
        setMessages(messages.filter(message => message.id !== id));
        updateNotificationCount(-1); // Decrementar el contador de notificaciones
        Swal.fire('Eliminado!', 'El mensaje ha sido eliminado.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'Hubo un problema al eliminar el mensaje.', 'error');
        console.error('Error eliminando el mensaje:', error);
      }
    }
  };

  const handleViewMessage = (id: string) => {
    setViewedMessages(prev => new Set(prev).add(id));
  };

  const updateNotificationCount = (change: number) => {
    // Implementa la lógica para actualizar el contador de notificaciones.
    console.log(`Notification count changed by ${change}`);
  };

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">Cargando...</Box>;
  }

  if (error) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Typography color="error">{error}</Typography></Box>;
  }

  return (
    <Box sx={{ padding: 3, maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#263339' }}>Mensajes de Contacto</Typography>
      {isSmallScreen ? (
        <Box>
          {messages.map((message) => (
            <Paper key={message.id} sx={{ padding: 2, marginBottom: 2, boxShadow: 1 }} onClick={() => handleViewMessage(message.id)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#333' }}>ID: {message.id}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#333' }}>Nombre: {message.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#333' }}>Correo: {message.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#333' }}>Mensaje:</Typography>
                  <Typography variant="body2">{message.message}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <IconButton onClick={() => handleDelete(message.id)} sx={{ color: '#d32f2f' }}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Mensaje</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Correo</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: '#333' }}>Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((message) => (
                <TableRow
                  key={message.id}
                  onClick={() => handleViewMessage(message.id)}
                  sx={{ backgroundColor: viewedMessages.has(message.id) ? '#e0f7fa' : 'white' }}
                >
                  <TableCell>{message.id}</TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(message.id)} sx={{ color: '#d32f2f' }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ContactMessage;
