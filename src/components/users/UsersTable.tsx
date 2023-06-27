import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import{ FC } from 'react'
import { MdModeEditOutline, MdOutlineDeleteOutline } from 'react-icons/md'

export const UsersTable:FC = () => {
  return (
    <>
      <TableContainer
      sx={{
        backgroundColor: 'secundary.main',
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre Completo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 4, 5, 6, 6, 7, 3, 8].map((user, index) => (
              <TableRow
              sx={{
                'td, th': {
                    boder: 0,
                    padding:'1.5rem'
                }
              }}>
                <TableCell>Alan Lopez VArgas</TableCell>
                <TableCell>alanwilfredo1@gmail.com</TableCell>
                <TableCell>+591 77241495</TableCell>
                <TableCell>
                    <Box sx={{
                        displayed: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <IconButton
                        sx={{
                            fontSize: '1.25re 1',
                             color:'primary.main'
                        }}>
                            <MdModeEditOutline/>
                        </IconButton>
                        <IconButton
                        sx={{
                            fontSize: '1.25re 1',
                             color:'error.main'
                        }}>
                            <MdOutlineDeleteOutline/>
                        </IconButton>
                    </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
