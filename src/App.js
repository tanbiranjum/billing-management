import { useState } from 'react'
import { Box, Button, Collapsible, Heading, Grommet} from 'grommet'
import { Notification } from 'grommet-icons'

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '28px',
      height: '20px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
)
import { CssBaseline, Typography } from '@mui/material'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            My App
          </Heading>
          <Button
            icon={<Notification />}
            onClick={() => {
              setShowSidebar(!showSidebar)
            }}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align="center" justify="center">
            app body
          </Box>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">
              sidebar
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
    <div className="App">
      {/* <CssBaseline /> */}
      <Typography variant="h1">Hello from Me</Typography>
    </div>
  )
}

export default App
