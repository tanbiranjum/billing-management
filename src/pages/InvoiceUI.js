import {
  Box,
  CssBaseline,
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

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  invoiceMargin: {
    marginLeft: '10px',
    color: '#ffff',
    padding: '10px',
  },
  headline: {
    color: 'black',
    textDecoration: 'underline',
  },
})

const value = {
  name: 'MD. Tanbir Anjum',
  phone: '01703586871',
  address: 'Uttara, Dhaka, Bangladesh',
  date: '12-08-21',
  code: '8081',
  marketingOfficer: 'Md. Abdur Rahman',
  description: 'Salimullah incorporation Rahman tiles hello i am Rahman',
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

const InvoiceUI = (props) => {
  const classes = useStyles()
  const { state } = useLocation()
  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'primary.dark',
        }}
      >
        <Typography variant="h4" align="center">
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
              {value.date}
            </Typography>
            <Typography variant="p" display="block">
              {value.name}
            </Typography>
            <Typography variant="p" display="block">
              {value.phone}
            </Typography>
            <Typography variant="p" display="block">
              {value.address}
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
              {value.marketingOfficer}
            </Typography>
            <Typography variant="p" display="block" align="right">
              {value.code}
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
              <TableRow>
                <TableCell rowSpan={6}>1</TableCell>
                <TableCell>RED</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>RED</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={5} align="right">
                  Price: Hello
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {console.log(state)}
    </div>
  )
}

export default InvoiceUI
