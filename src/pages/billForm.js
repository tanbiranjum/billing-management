import { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { makeStyles } from '@mui/styles'

import TextFieldWrapper from '../components/FormsUI/TextField'
import SelectWrapper from '../components/FormsUI/Select'
import DateTimePicker from '../components/FormsUI/DateTimePicker'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  address: '',
  date: '',
  code: '',
  marketingOfficer: '',
  description: '',
  color: '',
  quantity: 0,
  tileSize: '',
  rate: 0,
  price: 0,
}

const FORM_VALIDATION = Yup.object().shape({})

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
  const [productDetails, setProductDetails] = useState([
    { color: '', tileSize: '', quantity: 0, rate: 0 },
  ])
  const classes = useStyles()

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        columnGap="10px"
        marginBottom="20px"
      >
        <ReceiptIcon color="success" />
        <Typography variant="h6">New Bill</Typography>
      </Grid>
      <Grid container item>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(value) => {
            console.log(value)
          }}
        >
          <Form className={classes.formElement}>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Typography>Customer details</Typography>
              </Grid>
              <Grid item xs={12}>
                <DateTimePicker name="date" label="Date" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="name" label="Name" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="phone" label="Phone" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="address" label="Address" />
              </Grid>
              <Grid item xs={12}>
                <SelectWrapper name="code" label="Code" />
              </Grid>
              <Grid item xs={12}>
                <SelectWrapper name="code" label="Code" />
              </Grid>
              <Grid item xs={12}>
                <Typography>Order informations</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="description" label="Description" />
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={3}>
                  <TextFieldWrapper name="color" label="Color" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="tileSize" label="Tile Size" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="quantity" label="Quantity" />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldWrapper name="rate" label="Rate" />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="outlined">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  )
}

export default BillForm
