import { combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducer';
import CounterReducer from './reducers/CounterReducer';

export default combineReducers({
    user: LoginReducer,
    counter: CounterReducer,
})