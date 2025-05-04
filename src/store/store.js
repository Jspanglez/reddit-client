import { configureStore } from '@reduxjs/toolkit'
import voteReducer from './voteSlice'
import subredditReducer from './subreddditSlice'

export const store = configureStore({
  reducer: {
    vote: voteReducer,
    subreddit: subredditReducer
  },
})
