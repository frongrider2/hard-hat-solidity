import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'refreshing',
  initialState: {
    loading: false,
  },
  reducers: {
    SETLOADINGTRUE: (state) => {
      state.loading = true;
    },
    SETLOADINGFALSE: (state) => {
      state.loading = false;
    },
  },
});
export default loadingSlice.reducer;
