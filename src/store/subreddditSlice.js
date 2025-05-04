import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false,
  current: 'r/Subreddit 1'
}

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    clicked: (state, action) => {
      state.active = true
      state.current = action.payload
    }
  }
})

export const { clicked } = subredditSlice.actions
export default subredditSlice.reducer