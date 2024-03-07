import { combineReducers, } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from '../features/goods'
import positionReducer from '../features/position';
import { amountSlice } from '../features/amount-slice';

const reducer = combineReducers({
    amount: amountSlice.reducer,
    goods: goodsReducer,
    position: positionReducer
});
const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>

export default store;