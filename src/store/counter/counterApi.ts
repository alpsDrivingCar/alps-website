import ApiServices from '../../core/config/services/ApiService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Actions } from '../enumStore';

export const fetchCount = createAsyncThunk(
  Actions.FETCH_COUNT,
  async (args, thunkApi) => {
    console.log('run here');
    console.log(args, thunkApi);
    try {
      const res = await ApiServices.get('/todos/1');
      return res.data;
    } catch (err) {
      const error = err as { message: string };
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
