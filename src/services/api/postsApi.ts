import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Post} from '../../types/posts';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPostById: builder.query<Post, number>({
      query: (postId: number) => `/posts/${postId}`,
    }),
  }),
});

export const {useGetPostsQuery, useGetPostByIdQuery} = postsApi;
