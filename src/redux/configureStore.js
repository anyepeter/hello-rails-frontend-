import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './textSlice';

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export default store;
