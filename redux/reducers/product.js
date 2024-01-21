import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    
  ]
}

const product = createSlice({
  name: 'product',
  initialState,
  reducers : {
    setProducts : (state, action) => {
        state.data = [...state.data, action.payload]
    }
  }
})

export const {setProducts} = product.actions
export default product.reducer