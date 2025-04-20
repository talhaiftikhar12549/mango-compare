import { configureStore } from '@reduxjs/toolkit'
import compareToolReducer from './compareToolSlice'

export const store = configureStore({
  reducer: {
    compareTool: compareToolReducer,
  },
})
