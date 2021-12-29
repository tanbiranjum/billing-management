import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material'
import DrawerComponent from './components/DrawerComponent'
import { useState } from 'react'
import BillForm from './pages/billForm'
import AppBarUI from './components/AppBar'

const drawerWidth = 240

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBarUI
          // passing state and setFuntion to get child changed state to parent
          currentState={mobileOpen}
          setMobileOpenState={setMobileOpen}
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <DrawerComponent />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            <DrawerComponent />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <BillForm />
        </Box>
      </Box>
    </div>
  )
}

export default App
