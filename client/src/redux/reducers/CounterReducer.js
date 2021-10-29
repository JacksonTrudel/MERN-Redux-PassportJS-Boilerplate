import { GET_COUNTER, INCREMENT_COUNTER } from '../types/types';

const initialState = 0;

const CounterReducer = (state = initialState, action) => {
    console.log(`state: ${JSON.stringify(state)} action: ` + JSON.stringify(action));
    switch (action.type) {
        case GET_COUNTER:
            return state;
        case INCREMENT_COUNTER:
            return state + action.incrementAmount;
        default:
            return state;
    }
};

export default CounterReducer;