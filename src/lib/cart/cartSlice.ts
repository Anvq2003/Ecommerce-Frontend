import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '@/lib/index';
import ProductEntity from '@/lib/product/entity';
import CartEntity from './entity';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartEntity[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductEntity>) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.product.id === product.id);
      if (index === -1) {
        state.items.push(new CartEntity(product));
      } else {
        state.items[index].quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductEntity>) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ product: ProductEntity; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.items[index].quantity = quantity;
      }
    },
  },
});

export const selectCartItems: Selector<RootState, CartEntity[]> = (state) => state.cart.items;
export const selectCartTotal: Selector<RootState, number> = (state) =>
  state.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;


