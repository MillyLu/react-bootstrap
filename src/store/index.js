import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = configureStore({ reducer: rootReducer });
