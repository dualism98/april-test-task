import {configureStore} from '@reduxjs/toolkit';

import {postsApi} from '../services/api/postsApi';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;
