import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GoodsState = {
  goods: string[],
  loading: boolean,
  error: string,
};

const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: '',
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string[]>) => {
      state.goods = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    add: (state, action: PayloadAction<string>) => {
      state.goods.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter(good => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  }
});

export const { actions } = goodsSlice;
export default goodsSlice.reducer;
