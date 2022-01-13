import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {}

const invoice = createSlice({
  name: 'invoice',
  initialState,
})

const store = configureStore({
  reducer: invoice,
})

export default store
