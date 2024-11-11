// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { id: 1, name: 'Pinarello', price: '1800', liked: false, image: require('../assets/bicycle.png') },
    { id: 2, name: 'Pinarello', price: '1700', liked: false, image: require('../assets/bicycle01.png') },
    { id: 3, name: 'Pina bike', price: '1500', liked: false, image: require('../assets/bicycle02.png') },
    // { id: 4, name: 'Pinarello', price: '1900', liked: false, image: require('../assets/bicycle03.png') },
    // { id: 5, name: 'Pinarello', price: '2700', liked: false, image: require('../assets/bicycle02.png') },
    // { id: 6, name: 'Pinarello', price: '1350', liked: false, image: require('../assets/bicycle01.png') },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const product = state.data.find((p) => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
    addProduct: (state, action) => {
      // Thêm sản phẩm mới vào danh sách sản phẩm
      const newProduct = { ...action.payload, id: state.data.length + 1 }; // Tự động tạo id
      state.data.push(newProduct);
    },
  },
});

export const { toggleLike, addProduct } = productSlice.actions;
export default productSlice.reducer;
