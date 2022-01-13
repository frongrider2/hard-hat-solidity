import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    account: '',
    token: '',
    islogin: false,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.account = action.payload;
    },
    SETTOKEN: (state, action) => {
      state.token = action.payload;
    },
    LOGOUT: (state) => {
      state.account = '';
      state.token = '';
    },
    SETISLOGIN: (state, action) => {
      state.islogin = action.payload;
    },
  },
});
export default profileSlice.reducer;
