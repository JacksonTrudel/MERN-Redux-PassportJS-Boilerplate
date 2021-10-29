import { GET_LOGIN, SET_LOGIN, GET_COUNTER, INCREMENT_COUNTER } from '../types/types';

export const getLogin = () => {
    return { type: GET_LOGIN }
}

export const setLogin = (user) => {
    return {
        type: SET_LOGIN,
        user: user
    };
}

export const getCounter = () => {
    return { type: GET_COUNTER }
}

export const incrementCounter = (incrementAmount) => {
    return {
        type: INCREMENT_COUNTER,
        incrementAmount
    };
}
