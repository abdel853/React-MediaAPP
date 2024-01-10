import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice'; //settingsReducer would be any name as its exported as defaute we name it like that because reduce is the must imortant for us
import postReducer from './postSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    post: postReducer
  },
  })




