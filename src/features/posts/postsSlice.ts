import {createSlice} from '@reduxjs/toolkit';

import StoreNames from '../../store/StoreNames';
import {Post} from '../../types/posts';
import {fetchPostsData} from './postsThunks';

const postsSlice = createSlice({
  name: StoreNames.POSTS,
  initialState: {
    posts: [] as Post[],
    loading: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPostsData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPostsData.rejected, state => {
      state.loading = false;
    });
  },
});

export default postsSlice.reducer;
