import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods'

const reducer = combineReducers({
    amount: amountReducer,
    goods: goodsReducer
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;