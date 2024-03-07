import { combineReducers, } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods'
import positionReducer from '../features/position';

const reducer = combineReducers({
    amount: amountReducer,
    goods: goodsReducer,
    position: positionReducer
});
const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>

export default store;