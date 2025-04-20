import { configureStore } from '@reduxjs/toolkit'
import voteReducer from './voteSlice'

export const store = configureStore({
  reducer: {
    vote: voteReducer,
  },
})
