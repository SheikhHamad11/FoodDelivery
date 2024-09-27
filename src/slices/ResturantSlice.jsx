import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const ResturantSlice = createSlice({
  name: 'resturant',
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setResturant} = ResturantSlice.actions;

export const selectResturant = state => state.resturant.resturant;
export default ResturantSlice.reducer;
