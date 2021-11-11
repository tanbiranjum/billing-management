import { createTheme } from '@mui/material'
import { green, orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: green,
  },
  status: {
    danger: orange[500],
    test: green,
  },
})

export default theme
