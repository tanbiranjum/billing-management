import { createTheme } from '@mui/material'
import { blue, orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: blue,
  },
  status: {
    danger: orange[500],
    test: blue,
  },
})

export default theme
