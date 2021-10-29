import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './RootReducer';

const initialState = {
    user: {
        loggedIn: false,
        username: ''
    },
    counter: 0
};
const middleWare = [thunk];

const persistConfig = {
    key: 'root',
    whitelist: [],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);



/*
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleWare
})
*/
//const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));
