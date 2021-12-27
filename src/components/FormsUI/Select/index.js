import { MenuItem, TextField } from '@mui/material'
import { useField, useFormikContext } from 'formik'

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (event) => {
    const { value } = event.target
    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true
    configSelect.helperText = meta.error
  }
  return (
    <TextField {...configSelect}>
      <MenuItem value="8001">8001</MenuItem>
      <MenuItem value="8002">8002</MenuItem>
      <MenuItem value="8003">8003</MenuItem>
    </TextField>
  )
}

export default SelectWrapper
