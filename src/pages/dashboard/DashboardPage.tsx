import { Box, Typography } from '@mui/material'
import { FC } from 'react'

export const DashboardPage:FC = () => {
  return (
    <Box component='main'>
      <Typography variant='h1'  mb={5}>Gestiona tu clinica dental</Typography>
      <Typography variant='h2'>Resumen de tu actvidad</Typography>
    </Box>
  )
}
