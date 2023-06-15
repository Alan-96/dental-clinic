import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        gap: "1rem",
        boxShadow: '0px 3px 10px tgba(0,0,0,0.2)',
        padding: {xs: '3rem 1rem', md: '2rem 1rem'},
        border : '1px solid rgba(0,0,0,0.5)',
        borderRadius: '1rem',
      }}
    >
        <TextField
        label="Ingresa tu nombre"
        type="text"
        placeholder="Juan Manuel"
      />
      <TextField
        label="Ingresa tu apellido"
        type="text"
        placeholder="Perez Sosa"
      />
      <TextField
        label="Correo electronico"
        type="email"
        placeholder="example@gmail.com"
      />
      <TextField
        label="Contraseña"
        type="password"
        placeholder="Ingresa tu contrasena"
      />

      <Button type='submit'>Registrarse</Button>
    </Box>
  );
}
