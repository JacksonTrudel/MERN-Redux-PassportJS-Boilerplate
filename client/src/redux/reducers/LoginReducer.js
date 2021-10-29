import { GET_LOGIN, SET_LOGIN } from '../types/types';

const initialState = {
    loggedIn: false,
    username: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.types) {
        case GET_LOGIN:
            return {
                ...state
            };
        case SET_LOGIN:
            return {
                //...state.user,
                ...action.user
            };
        default:
            return state;
    }
};

export default LoginReducer;
