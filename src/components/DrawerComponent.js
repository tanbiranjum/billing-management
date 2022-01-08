import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

const DrawerComponent = () => {
  const navigate = useNavigate()

  const itemList = [
    {
      text: 'Overview',
      icon: <NoteAltIcon />,
      path: '/',
    },
    {
      text: 'Search',
      icon: <SearchIcon />,
      path: '/search',
    },
    {
      text: 'New Invoice',
      icon: <ReceiptIcon />,
      path: '/new-invoice',
    },
    {
      text: 'Note',
      icon: <NoteAltIcon />,
      path: '/note',
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings',
    },
  ]

  const handleRoute = (path) => {
    navigate(path)
  }

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {itemList.map((item, index) => (
          <ListItem
            onClick={() => {
              handleRoute(item.path)
            }}
            button
            key={index}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default DrawerComponent
