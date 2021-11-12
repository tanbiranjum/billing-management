import { Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'

const DrawerComponent = () => (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <ListItem button key="Overview">
        <ListItemIcon>
          <NoteAltIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
      <ListItem button key="Search">
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button key="New Bill">
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="New Bill" />
      </ListItem>
      <ListItem button key="Note">
        <ListItemIcon>
          <NoteAltIcon />
        </ListItemIcon>
        <ListItemText primary="Note" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button key="Setting">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
    </List>
  </div>
)

export default DrawerComponent
