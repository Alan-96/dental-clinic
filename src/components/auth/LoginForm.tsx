import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

export const LoginForm = () => {

    
    const [formLogin, setformLogin] = useState({
        email: '',
        password: ''
    })
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
        label="Correo electronico"
        type="email"
        placeholder="example@gmail.com"
      />
      <TextField
        label="Contraseña"
        type="password"
        placeholder="Ingresa tu contrasena"
      />

      <Button type='submit'>Inciar Sesion</Button>
    </Box>
  );
}
