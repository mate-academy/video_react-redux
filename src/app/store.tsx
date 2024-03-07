import { combineReducers, } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { amountSlice } from '../features/amount-slice';
import { goodsSlice } from '../features/goods-slice';
import { positionSlice } from '../features/position-slice';

const reducer = combineReducers({
    amount: amountSlice.reducer,
    goods: goodsSlice.reducer,
    position: positionSlice.reducer
});
const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>

export default store;