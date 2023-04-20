import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchText = createAsyncThunk('greeting', async () => {
  try {
    const data = await axios.get('http://127.0.0.1:3000/greetings');
    if (data.message) {
      return {
        success: true,
        data,
      };
    }
    return { success: true, data };
  } catch (err) {
    return { sucess: false, err: err.response.data.message };
  }
});

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchText.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default messageSlice.reducer;
