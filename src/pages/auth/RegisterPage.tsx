import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { RegisterForm } from '../../components'

export const RegisterPage:FC = () => {
  return (
    <Box 
    component='main'
    sx={{
      padding: '2rem 0',
      width: { xs: '90%', md: '50%', lg: '40%' },
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Typography textAlign='center' variant='h1'>Registrate</Typography>
    
    <Typography textAlign='center' mb={4}>Comienza a gestionar tu clinica dental</Typography>
    
    
    {/* FORMULARIO */}
    <RegisterForm/>

    </Box>
  )
}
