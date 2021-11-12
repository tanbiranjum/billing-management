import { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import ReceiptIcon from '@mui/icons-material/Receipt'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { makeStyles } from '@mui/styles'

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => ({
  textField: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '90%',
  },
  formElement: {
    flex: 1,
  },
}))

const BillForm = () => {
  const [value, setValue] = useState(new Date('2021-08-18T21:11:54'))
  const [age, setAge] = useState([])
  const classes = useStyles()
  const [customerName, setCustomerName] = useState('')
  const [customerNumber, setCustomerNumber] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailEror] = useState(false)
  const [customerNameError, setCustomerNameError] = useState('')
  const [customerNumberError, setCustomerNumberError] = useState('')
  const [customerAddressError, setCustomerAddressError] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setEmailEror(false)
    if (email === '') {
      setEmailEror(true)
      return
    }
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    }
  }

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleCodeChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <Grid container direction="column">
      <Grid item container alignItems="center" columnGap="10px" marginBottom="20px">
        <ReceiptIcon color="success" />
        <Typography variant="h6">New Bill</Typography>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid container item>
        <form className={classes.formElement} noValidate autoComplete={false} onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            className={classes.textField}
            onChange={(e) => setCustomerName(e.target.value)}
            variant="outlined"
            label="Customer Name"
            type="text"
            required={true}
            error={customerNameError}
          />
          <TextField
            fullWidth
            className={classes.textField}
            onChange={(e) => setCustomerNumber(e.target.value)}
            variant="outlined"
            label="Mobile No"
            type="number"
            required={true}
            error={customerNumberError}
          />
          <TextField
            fullWidth
            className={classes.textField}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            type="email"
            required={true}
            error={emailError}
          />
          <TextField
            fullWidth
            className={classes.textField}
            onChange={(e) => setCustomerAddress(e.target.value)}
            variant="outlined"
            label="Address"
            multiline
            maxRows={4}
            type="text"
            required={true}
            error={customerAddressError}
          />
          <InputLabel id="demo-simple-select-label" color="primary">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleCodeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default BillForm
