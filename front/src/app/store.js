import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userDataSlice'
export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})