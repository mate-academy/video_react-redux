import { combineReducers } from 'redux'
import amountReducer from './amount/index'


const rootReducer = combineReducers({amountReducer});

export default rootReducer;