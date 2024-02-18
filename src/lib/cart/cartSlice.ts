import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '@/lib/index';
import ProductEntity from '@/lib/product/entity';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as ProductEntity[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductEntity>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<ProductEntity>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
