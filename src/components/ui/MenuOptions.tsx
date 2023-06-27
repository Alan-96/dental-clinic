import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { IMenu } from '../../interfaces'
import { useNavigate } from 'react-router-dom';

interface Props{
    options: IMenu[];
}
export const MenuOptions:FC<Props> = ({options}) => {

const navigate = useNavigate();
const handleNavigate = (url: string) => {
    navigate( url)
}

  return (
    <List>
        {
            options.map(item =>(
              
                <ListItem key={item.path} onClick={()=> handleNavigate(item.path)}>
                    <ListItemButton
                    sx={{
                        mb: '.5rem',
                        padding: '.75rem 1.5rem',
                        borderRadius: '.75rem',
                        transitionDuration: '.3s',
                        transitionProperty: 'backgroundColor',
                        ':hover': {
                            bgcolor: 'primary.dark',
                        }
                    }}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={ item.name}/>
                    </ListItemButton>
                </ListItem>
            )

            )
        }
        
    </List>
  )
}
