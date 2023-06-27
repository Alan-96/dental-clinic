import { Avatar, Box, Grid, Card, Typography, Button } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const QuotesCard:FC = () => {

  const navigate = useNavigate();

  return (
   <Grid item xs={12} md={6} lg={4}>
    <Card >
        <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', mb:2}}>
            <Avatar/>
            <Typography> Nombre del Cliente</Typography>        
            </Box>
            <Typography>Fecha de la cita</Typography>
            <Typography variant='subtitle1' mb='1rem'
>Nombre de la consulta</Typography>
            <Button variant='outlined'
            onClick={()=> navigate(`/quotes/${1}`)}>
                ver la consulta
            </Button>
    </Card>
   </Grid>
  )
}
