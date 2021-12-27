import { useState } from 'react'
import { Button, Grid, Typography, TextField } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import TextFieldWrapper from '../components/FormsUI/TextField'
import SelectWrapper from '../components/FormsUI/Select'
import DateTimePicker from '../components/FormsUI/DateTimePicker'
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  address: '',
  date: '',
  code: '',
  marketingOfficer: '',
  description: '',
  color: [''],
  quantity: [''],
  tileSize: [''],
  rate: [''],
  price: 0,
}

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.number().required('Required'),
  address: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  code: Yup.string().required('Required'),
  marketingOfficer: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  color: Yup.string().required('Required'),
  quantity: Yup.number().required('Required'),
  tileSize: Yup.string().required('Required'),
  rate: Yup.number().required('Required'),
  price: Yup.number().required('Required'),
})

const BillForm = () => {
  const [productDetails, setProductDetails] = useState([
    { id: Date.now(), color: '', tileSize: '', quantity: 0, rate: 0 },
  ])

  const handleChangeField = (event, index) => {
    const values = [...productDetails]
    values[index][event.target.name] = event.target.value
    setProductDetails(values)
  }

  const handleAddField = () => {
    setProductDetails([
      ...productDetails,
      {
        id: Date.now(),
        color: '',
        tileSize: '',
        quantity: 0,
        rate: 0,
      },
    ])
  }

  const handleRemoveField = (index) => {
    let newProductDetails = [...productDetails]
    newProductDetails = newProductDetails.filter(
      (product, productIndex) => index !== productIndex
    )
    setProductDetails(newProductDetails)
  }

  const handleSubmit = () => {}

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
          // validationSchema={FORM_VALIDATION}
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
                {productDetails.reduce(
                  (totalPrice, item) => item.rate * 1 + totalPrice,
                  0
                )}
                {productDetails.map((productDetail, index) => (
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    key={productDetail.id}
                  >
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="color"
                        label="Color"
                        onChange={(event) => {
                          handleChangeField(event, index)
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
                          handleChangeField(event, index)
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
                          handleChangeField(event, index)
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="rate"
                        label="Rate"
                        type="number"
                        onChange={(event) => {
                          handleChangeField(event, index)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {index ? (
                        <Button
                          fullWidth
                          variant="outlined"
                          onClick={() => handleRemoveField(index)}
                        >
                          -Remove
                        </Button>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    handleAddField()
                  }}
                >
                  + ADD
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  )
}

export default BillForm
