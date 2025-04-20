import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  upClicked: false,
  downClicked: false
}

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    upvote: (state) => {
      // You have clicked downvote and are about to click upvote
      if (state.downClicked) {
        // state.value += 2
        state.downClicked = false
      } else if (state.upClicked) {
        // state.value -= 1
      } else {
        // state.value += 1
      }
      state.upClicked = !state.upClicked
    },
    downvote: (state) => {
      if (state.upClicked) {
        // state.value -= 2
        state.upClicked = false
      } else if (state.downClicked) {
        // state.value += 1
      } else {
        // state.value -= 1
      }
      state.downClicked = !state.downClicked
    },
  },
})

export const { upvote, downvote } = voteSlice.actions
export default voteSlice.reducer
