import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSubreddits = createAsyncThunk(
  'subreddit/fetchSubreddits',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://www.reddit.com/subreddits/popular.json');
      const data = await response.json();
      return data.data.children.map((child) => ({
        key: child.data.id,
        name: child.data.display_name_prefixed,
      }));
    } catch (err) {
      return rejectWithValue('Failed to load subreddits');
    }
  }
);

const initialState = {
  active: false,
  subreddits: [],
  current: 'r/AskReddit',
  loading: false,
  error: null
}

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    clicked: (state, action) => {
      state.active = true
      state.current = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.loading = false;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

export const { clicked } = subredditSlice.actions
export default subredditSlice.reducer