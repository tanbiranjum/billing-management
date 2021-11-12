import { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'

import { makeStyles } from '@mui/styles'

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
  return (
    <Grid container direction="column">
      <Grid item container alignItems="center" columnGap="10px">
        <ReceiptIcon color="success" />
        <Typography variant="h6">New Bill</Typography>
      </Grid>
      <Grid container item>
        <form className={classes.formElement} noValidate autoComplete={false} onSubmit={handleFormSubmit}>
          <Grid container item>
            <Grid container item xs={6}>
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
            </Grid>
            <Grid container item xs={6}>
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
            </Grid>
          </Grid>
          <Grid container item>
            <Grid container item xs={6}>
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
            </Grid>
            <Grid container item xs={6}>
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
            </Grid>
          </Grid>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default BillForm
