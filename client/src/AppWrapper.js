import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';

import { PersistGate } from 'redux-persist/lib/integration/react';

function AppWrapper() {
    return (
        <Provider store={store}>
            <PersistGate loading={<App />} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}


export default AppWrapper;