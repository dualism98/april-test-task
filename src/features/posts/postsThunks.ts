import {createAsyncThunk} from '@reduxjs/toolkit';

import ApiService from '../../services/api/Api.service';

export const fetchPostsData = createAsyncThunk(
  'posts/fetchPostsData',
  async () => {
    const posts = await ApiService.getPostsList();
    return posts;
  },
);
