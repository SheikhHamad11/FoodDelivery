import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './src/slices/CartSlice';
import ResturantSlice from './src/slices/ResturantSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    resturant: ResturantSlice,
  },
});
