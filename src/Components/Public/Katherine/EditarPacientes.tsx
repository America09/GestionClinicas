// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl, Grid, Container, Breadcrumbs, Link, Paper } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import HomeIcon from '@mui/icons-material/Home';
// import { Patient, UserPatient } from '../../../Types/Patient';  
// import { User } from '../../../Types/Api';
// import Swal from 'sweetalert2';  
// import { useNavigate } from 'react-router-dom';
// import {
//   handleCreatePatient,
//   createUsersPatient,
//   updatePatient, // Asegúrate de tener esta función
//   updateUser // Asegúrate de tener esta función
// } from '../../../Handlers/PatientHandler';

// interface FormData {
//   name: string;
//   surname: string;
//   email: string;
//   phone: string;
//   bloodGroup: string;
//   occupation: string;
//   maritalStatus: string;
//   address: string;
//   gender: string;
// }

// interface AgregarPacientesProps {
//   patientToEdit?: Patient;
// }

// const AgregarPacientes: React.FC<AgregarPacientesProps> = ({ patientToEdit }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormData>({
//     name: patientToEdit?.name ?? '',
//     surname: patientToEdit?.surname ?? '',
//     email: patientToEdit?.email ?? '',
//     phone: patientToEdit?.phone ?? '',
//     bloodGroup: patientToEdit?.bloodGroup ?? '',
//     occupation: patientToEdit?.occupation ?? '',
//     maritalStatus: patientToEdit?.maritalStatus ?? '',
//     address: patientToEdit?.address ?? '',
//     gender: patientToEdit?.gender ?? '',
//   });
//   const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
//   const [errormsg, setErrorMsg] = useState<string>("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const asyncCreateUser = async(UserPatient: UserPatient, paciente: Patient, update: boolean = false) => {
//     try {
//       let user;
//       if (update) {
//         // Actualizar usuario
//         user = await updateUser(UserPatient);
//       } else {
//         // Crear nuevo usuario
//         user = await createUsersPatient(UserPatient);
//       }

//       if (user.id != 0) {
//         paciente.userId = user.id;
//         let pacientecreate;
//         if (update) {
//           // Actualizar paciente
//           pacientecreate = await updatePatient(paciente);
//         } else {
//           // Crear nuevo paciente
//           pacientecreate = await handleCreatePatient(paciente);
//         }
//         return pacientecreate.userId != 0;
//       }
//     } catch (error) {
//       setErrorMsg(error.response.data.message ?? '');
//     }
//     return false;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errors: Partial<FormData> = {};
//     if (!formData.name) {
//       errors.name = 'El nombre es requerido';
//     }
//     if (!formData.surname) {
//       errors.surname = 'El apellido es requerido';
//     }
//     if (!formData.email) {
//       errors.email = 'El correo es requerido';
//     }
//     if (!formData.phone) {
//       errors.phone = 'El número de teléfono es requerido';
//     }
//     if (!formData.bloodGroup) {
//       errors.bloodGroup = 'El grupo sanguíneo es requerido';
//     }
//     if (!formData.occupation) {
//       errors.occupation = 'La ocupación es requerida';
//     }
//     if (!formData.maritalStatus) {
//       errors.maritalStatus = 'El estado civil es requerido';
//     }
//     if (!formData.address) {
//       errors.address = 'La dirección es requerida';
//     }
//     if (!formData.gender) {
//       errors.gender = 'El género es requerido';
//     }

//     setFormErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       const user: UserPatient = {
//         username: formData.name + ' ' + formData.surname,
//         email: formData.email,
//         password: 'pacientetest',
//         role: 1
//       }
//       const patients: Patient = {
//         occupation: formData.occupation,
//         picture: "",
//         phone: formData.phone,
//         bloodGroup: formData.bloodGroup,
//         maritalStatus: formData.maritalStatus,
//         address: formData.address,
//         gender: formData.gender,
//         userId: patientToEdit?.userId ?? 0 // Mantén el userId si es una actualización
//       }
//       const update = !!patientToEdit; // Verifica si estamos editando
//       const createUser = await asyncCreateUser(user, patients, update);
//       if (createUser) {
//         Swal.fire({
//           icon: 'success',
//           title: update ? 'Actualizado' : 'Guardado',
//           text: update ? 'El paciente se ha actualizado correctamente.' : 'El paciente se ha guardado correctamente.',
//         });
//         navigate('/admin-Listpacientes');
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.' + errormsg,
//         });
//       }
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Paper sx={{ p: 3, mt: 2, boxShadow: 3 }}>
//         <Box sx={{ mb: 2 }}>
//           <Breadcrumbs aria-label="breadcrumb">
//             <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
//               <HomeIcon sx={{ mr: 0.5 }} />
//               Inicio
//             </Link>
//             <Link color="inherit" href="/admin-ListPacientes">
//               Pacientes
//             </Link>
//             <Typography color="textPrimary">Añadir paciente</Typography>
//           </Breadcrumbs>
//         </Box>
//         <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
//           {patientToEdit ? 'Editar paciente' : 'Añadir paciente'}
//         </Typography>
//         <Box 
//           component="form" 
//           onSubmit={handleSubmit} 
//           sx={{ mt: 3 }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Nombre"
//                 variant="outlined"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 fullWidth
//                 error={!!formErrors.name}
//                 helperText={formErrors.name}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Apellido"
//                 variant="outlined"
//                 name="surname"
//                 value={formData.surname}
//                 onChange={handleChange}
//                 fullWidth
//                 error={!!formErrors.surname}
//                 helperText={formErrors.surname}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Correo"
//                 variant="outlined"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 fullWidth
//                 error={!!formErrors.email}
//                 helperText={formErrors.email}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Num. Teléfono"
//                 variant="outlined"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 type="tel"
//                 fullWidth
//                 error={!!formErrors.phone}
//                 helperText={formErrors.phone}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!formErrors.bloodGroup}>
//                 <InputLabel>Grupo Sanguíneo</InputLabel>
//                 <Select
//                   name="bloodGroup"
//                   value={formData.bloodGroup}
//                   onChange={handleChange}
//                   required
//                 >
//                   <MenuItem value="A+">A+</MenuItem>
//                   <MenuItem value="A-">A-</MenuItem>
//                   <MenuItem value="B+">B+</MenuItem>
//                   <MenuItem value="B-">B-</MenuItem>
//                   <MenuItem value="AB+">AB+</MenuItem>
//                   <MenuItem value="AB-">AB-</MenuItem>
//                   <MenuItem value="O+">O+</MenuItem>
//                   <MenuItem value="O-">O-</MenuItem>
//                 </Select>
//                 {formErrors.bloodGroup && (
//                   <Typography variant="body2" color="error">
//                     {formErrors.bloodGroup}
//                   </Typography>
//                 )}
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Ocupación"
//                 variant="outlined"
//                 name="occupation"
//                 value={formData.occupation}
//                 onChange={handleChange}
//                 fullWidth
//                 error={!!formErrors.occupation}
//                 helperText={formErrors.occupation}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!formErrors.maritalStatus}>
//                 <InputLabel>Estado civil</InputLabel>
//                 <Select
//                   name="maritalStatus"
//                   value={formData.maritalStatus}
//                   onChange={handleChange}
//                   required
//                 >
//                   <MenuItem value="soltero">Soltero</MenuItem>
//                   <MenuItem value="casado">Casado</MenuItem>
//                   <MenuItem value="divorciado">Divorciado</MenuItem>
//                   <MenuItem value="viudo">Viudo</MenuItem>
//                 </Select>
//                 {formErrors.maritalStatus && (
//                   <Typography variant="body2" color="error">
//                     {formErrors.maritalStatus}
//                   </Typography>
//                 )}
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Dirección"
//                 variant="outlined"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 fullWidth
//                 error={!!formErrors.address}
//                 helperText={formErrors.address}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!formErrors.gender}>
//                 <InputLabel>Género</InputLabel>
//                 <Select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <MenuItem value="masculino">Masculino</MenuItem>
//                   <MenuItem value="femenino">Femenino</MenuItem>
//                   <MenuItem value="otro">Otro</MenuItem>
//                 </Select>
//                 {formErrors.gender && (
//                   <Typography variant="body2" color="error">
//                     {formErrors.gender}
//                   </Typography>
//                 )}
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: 'DarkCyan',
//                     '&:hover': {
//                       backgroundColor: 'darkcyan',
//                     },
//                   }}
//                   type="submit"
//                 >
//                   {patientToEdit ? 'Actualizar' : 'Agregar'}
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default AgregarPacientes;