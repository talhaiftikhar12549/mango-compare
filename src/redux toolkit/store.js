import { configureStore } from '@reduxjs/toolkit'
import compareToolReducer from './compareToolSlice'
import forumsReducer from './ForumsSlice'

export const store = configureStore({
  reducer: {
    compareTool: compareToolReducer,
    forums: forumsReducer
  },
})
