import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './Slice/ProductSlice'



export default configureStore({
  reducer: {
   products : ProductSlice.reducer
  }
})