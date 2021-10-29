import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';

import PageNotFound from './components/PageNotFound';
import CreateIdea from './components/CreateIdea';
import SignInPage from './components/page/SignInPage';
import MainHeader from './components/header/MainHeader';
import CreateAccountPage from './components/page/CreateAccountPage';
import HomePage from './components/page/HomePage';
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  const [login, setLogin] = useState({
    loggedIn: false,
    username: null
  });

  // get user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setLogin(user ?? { loggedIn: false, username: null });
  }, []);

  const beef = (<Router>
    <div>
      <div className="main-header">
        <MainHeader login={login} setLogin={setLogin} />
      </div>
      <Switch>
        <Route path='/create-account' render={() => <CreateAccountPage login={login} setLogin={setLogin} />} />
        <Route path='/sign-in' render={() => <SignInPage login={login} setLogin={setLogin} />} />
        <Route path='/create-idea' component={CreateIdea} />
        <Route path='/homepage' render={() => <HomePage login={login} />} />
        <Route exact path='/' render={() => <HomePage login={login} />} />
        {/* Page not found route -> catches everything not matching route above */}
        <Route path='/' component={PageNotFound} />
      </Switch>
    </div>
  </Router>);

  return (
    <Provider store={store}>
      <PersistGate loading={beef} persistor={persistor}>
        <Router>
          <div>
            <div className="main-header">
              <MainHeader login={login} setLogin={setLogin} />
            </div>
            <Switch>
              <Route path='/create-account' render={() => <CreateAccountPage login={login} setLogin={setLogin} />} />
              <Route path='/sign-in' render={() => <SignInPage login={login} setLogin={setLogin} />} />
              <Route path='/create-idea' component={CreateIdea} />
              <Route path='/homepage' render={() => <HomePage login={login} />} />
              <Route exact path='/' render={() => <HomePage login={login} />} />
              {/* Page not found route -> catches everything not matching route above */}
              <Route path='/' component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}


export default App;