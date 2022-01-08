// import { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import TextFieldWrapper from '../components/FormsUI/TextField'
import SelectWrapper from '../components/FormsUI/Select'
import DateTimePicker from '../components/FormsUI/DateTimePicker'
import { Formik, Form, Field, FieldArray } from 'formik'
import FORM_VALIDATION from '../validation/formValidation'
import { useNavigate } from 'react-router-dom'

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  address: '',
  date: '',
  code: '',
  marketingOfficer: '',
  description: '',
  products: [
    {
      id: Date.now(),
      color: 'RED',
      quantity: '',
      tileSize: '',
      rate: '',
    },
  ],
  price: 0,
}

const BillForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (value) => {
    navigate('/preview', { state: value })
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
          // validationSchema={FORM_VALIDATION}
          onSubmit={(value) => {
            handleSubmit(value)
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
                <SelectWrapper
                  name="marketingOfficer"
                  label="Marketing Officer"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Order informations</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="description" label="Description" />
              </Grid>
              <Grid item container xs={12} spacing={2}>
                {/* Field array is for dynamic array
                Render props which is function as child component (Fun)  */}
                <FieldArray name="products">
                  {/* FieldArray pass a props autometically */}
                  {(arrayProps) => {
                    const { push, remove, form } = arrayProps
                    const { values } = form
                    const { products } = values
                    return (
                      <>
                        {products.map((product, index) => (
                          <Grid
                            item
                            container
                            xs={12}
                            spacing={2}
                            key={product.id}
                          >
                            <Grid item xs={3}>
                              <Field
                                fullWidth
                                variant="outlined"
                                name={`products[${index}]['color']`}
                                label="Color"
                              >
                                {/* Render props to hook mui field with formik otherwise its will not work */}
                                {({ field }) => <TextFieldWrapper {...field} />}
                              </Field>
                            </Grid>
                            <Grid item xs={3}>
                              <Field
                                fullWidth
                                variant="outlined"
                                name={`products[${index}]['tileSize']`}
                                label="Tile Size"
                              >
                                {({ field }) => <TextFieldWrapper {...field} />}
                              </Field>
                            </Grid>
                            <Grid item xs={3}>
                              <Field
                                fullWidth
                                variant="outlined"
                                name={`products[${index}]['quantity']`}
                                label="Quantity"
                              >
                                {({ field }) => <TextFieldWrapper {...field} />}
                              </Field>
                            </Grid>
                            <Grid item xs={3}>
                              <Field
                                fullWidth
                                variant="outlined"
                                name={`products[${index}]['rate']`}
                                label="Rate"
                              >
                                {({ field }) => <TextFieldWrapper {...field} />}
                              </Field>
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                onClick={() => remove(index)}
                              >
                                -Remove
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                onClick={() =>
                                  push({
                                    id: Date.now(),
                                    color: '',
                                    quantity: '',
                                    tileSize: '',
                                    rate: '',
                                  })
                                }
                              >
                                +Add
                              </Button>
                            </Grid>
                          </Grid>
                        ))}
                      </>
                    )
                  }}
                </FieldArray>
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
