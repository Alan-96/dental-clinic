import { Box, Button, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { QuotesCard } from '../../components'
import { useNavigate } from 'react-router-dom'

export const QuotesPage:FC = () => {

  const navigate = useNavigate();
  return (
    <Box component='main' mb={5}>
      <Typography variant='h1' >Gestiona tus citas</Typography>
      <Button onClick={() => navigate('/')}>Agregar consulta</Button>

      <Grid container spacing={3}>
        {
          [1,2,3,4,5].map((quotes, index) =>(
            <QuotesCard key={index}/>
          ))
        }
      </Grid>
    </Box>
  )
}
