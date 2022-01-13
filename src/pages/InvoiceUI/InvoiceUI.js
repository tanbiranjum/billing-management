import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { useLocation } from 'react-router-dom'
import useStyles from './style'

import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

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
      color: '',
      quantity: '',
      tileSize: '',
      rate: '',
    },
  ],
  price: 0,
}

const InvoiceUI = () => {
  const invoiceCollection = collection(db, 'invoice')

  const addToInvoice = async () => {
    try {
      await addDoc(invoiceCollection, state)
    } catch (error) {
      console.log(error.message)
    }
  }

  const classes = useStyles()

  let { state } = useLocation()
  if (state === null) {
    state = INITIAL_FORM_STATE
  }
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'primary.dark',
        }}
      >
        <Typography variant="h4" align="center" className={classes.Color}>
          INVOICE
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={3} className={classes.invoiceMargin}>
            <Typography
              variant="h6"
              display="block"
              className={classes.headline}
            >
              Invoices to
            </Typography>
            <Typography variant="p" display="block">
              {state.date}
            </Typography>
            <Typography variant="p" display="block">
              {state.name}
            </Typography>
            <Typography variant="p" display="block">
              {state.phone}
            </Typography>
            <Typography variant="p" display="block">
              {state.address}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.invoiceMargin}>
            <Typography
              variant="h6"
              display="block"
              align="right"
              className={classes.headline}
            >
              Order Info
            </Typography>
            <Typography variant="p" display="block" align="right">
              Invoice no: 12032
            </Typography>
            <Typography variant="p" display="block" align="right">
              {state.marketingOfficer}
            </Typography>
            <Typography variant="p" display="block" align="right">
              {state.code}
            </Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Tile Size</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.products.map((product, index) => (
                <TableRow key={index}>
                  {index === 0 ? (
                    <TableCell rowSpan={state.products.length}>
                      {state.description}
                    </TableCell>
                  ) : (
                    ''
                  )}
                  <TableCell>{product.color}</TableCell>
                  <TableCell>{product.tileSize}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.rate}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right">
                  <Typography
                    variant="p"
                    display="block"
                    className={classes.priceTag}
                  >
                    Price: {state.price}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={addToInvoice}>Print</Button>
      </Box>
    </div>
  )
}

export default InvoiceUI
