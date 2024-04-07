import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const holdingListSlice = createSlice({
  name: 'holdingList',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setLoading: state => {
      state.isLoading = true;
    },
  },
});

export const {setData, setError, setLoading} = holdingListSlice.actions;
export default holdingListSlice.reducer;
