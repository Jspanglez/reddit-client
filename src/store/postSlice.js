import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRelativeTime } from '../assets/getRelativeTime'

let debounceTimeout

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = 'popular', { rejectWithValue }) => {
    clearTimeout(debounceTimeout)
    return new Promise((resolve, reject) => {
      debounceTimeout = setTimeout(async () => {
        try {
          // const response = await fetch(`/api/${subreddit}.json`)
          const response = await fetch(`https://api.reddit.com/${subreddit}.json`)
          const data = await response.json()
          resolve(
            data.data.children.map((child) => ({
              id: child.data.id,
              title: child.data.title,
              body: child.data.selftext,
              userName: child.data.author,
              time: getRelativeTime(child.data.created_utc),
              comments: child.data.num_comments,
              subreddit: child.data.subreddit,
              votes: child.data.ups - child.data.downs,
              media: child.data.post_hint === 'hosted:video'
              ? child.data.media?.reddit_video?.fallback_url
              : child.data.url,
              thumbnail: child.data.thumbnail !== 'self' ? child.data.thumbnail : null,
            }))
          )
        } catch (err) {
          reject(rejectWithValue('Failed to load posts'))
        }
      }, 500)
    })
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearPosts(state) {
      state.posts = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default postSlice.reducer
export const { clearPosts } = postSlice.actions