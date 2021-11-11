import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuIcon,
  Typography,
  Toolbar,
} from '@mui/material'

import { GridViewIcon, ReceiptIcon, SettingsIcon, NoteAltIcon } from '@mui/icons-material'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>This is header</Grid>
        <Grid item>This is item</Grid>
      </Grid>
      <Typography variant="h1" color="primary">
        Hello from Me
      </Typography>
    </div>
  )
}

export default App
