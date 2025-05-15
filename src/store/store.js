import { configureStore } from '@reduxjs/toolkit'
import subredditReducer from './subreddditSlice'
import postReducer from './postSlice'

export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    posts: postReducer
  },
})
