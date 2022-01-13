import { useState, useEffect } from 'react'
import { MenuItem, TextField } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { db } from '../../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const SelectWrapper = ({ name, options, selectFieldName, ...otherProps }) => {
  console.log(selectFieldName)
  const { setFieldValue } = useFormikContext()
  const [selectField, setSelectField] = useState(null)
  const [field, meta] = useField(name)

  const dataCollection = collection(db, 'data')

  useEffect(() => {
    const getSelectFieldData = async () => {
      const result = await getDocs(dataCollection)
      const selectFieldList = result.docs.map((doc) => doc.data())
      setSelectField(selectFieldList)
      console.log(selectField)
    }
    // getSelectFieldData()
  }, [dataCollection])

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
      {/* {selectField.map((item) => console.log(item))} */}
      <MenuItem value="8001">8001</MenuItem>
      <MenuItem value="8002">8002</MenuItem>
      <MenuItem value="8003">8003</MenuItem>
    </TextField>
  )
}

export default SelectWrapper
