import { useState } from 'react'
import { Button, Grid, Typography, TextField } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
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

const BillForm = () => {
  const [productDetails, setProductDetails] = useState([
    { color: '', tileSize: '', quantity: 0, rate: 0 },
  ])

  const handleChangeField = (index, event) => {
    const values = [...productDetails]
    values[index][event.target.name] = event.target.value
    setProductDetails(values)
  }

  const handleAddFields = () => {
    setProductDetails([
      ...productDetails,
      {
        color: '',
        tileSize: '',
        quantity: 0,
        rate: 0,
      },
    ])
  }

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
          <Form>
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
                <SelectWrapper name="code" label="Marketing Officer" />
              </Grid>
              <Grid item xs={12}>
                <Typography>Order informations</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="description" label="Description" />
              </Grid>
              <Grid item container xs={12} spacing={2}>
                {productDetails.map((productDetail, index) => (
                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="color"
                        label="Color"
                        onChange={(event) => {
                          handleChangeField(index, event)
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="tileSize"
                        label="Tile Size"
                        onChange={(event) => {
                          handleChangeField(index, event)
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="quantity"
                        label="Quantity"
                        onChange={(event) => {
                          handleChangeField(index, event)
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="rate"
                        label="Rate"
                        onChange={(event) => {
                          handleChangeField(index, event)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {productDetails.length === (index + 1) ? <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleAddFields}
                      >
                        Add
                      </Button> : <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleAddFields}
                      >
                        Delete
                      </Button>}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  )
}

export default BillForm
