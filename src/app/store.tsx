import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';

const reducer = combineReducers({
    amount: amountReducer
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;