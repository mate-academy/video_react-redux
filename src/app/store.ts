// npm i redux @types/redux
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import amount from '../features/amount';
import goods from '../features/goods';
import position from '../features/position';

const reducer = combineReducers({
    amount,
    goods,
    position,
});
const store = createStore(reducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export default store;
