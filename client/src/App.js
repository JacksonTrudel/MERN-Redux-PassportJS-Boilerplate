import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';

import PageNotFound from './components/PageNotFound';
import CreateIdea from './components/CreateIdea';
import SignInPage from './components/page/SignInPage';
import MainHeader from './components/header/MainHeader';
import CreateAccountPage from './components/page/CreateAccountPage';
import HomePage from './components/page/HomePage';
import { setLogin as setLogin_Redux } from './redux/actions/LoginActions';

function App() {
  const [login, setLogin] = useState({
    loggedIn: false,
    username: ''
  });

  const dispatch = useDispatch();

  // get user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) ?? { loggedIn: false, username: '' };
    setLogin(user);
    dispatch(setLogin_Redux(user));
  }, [dispatch]);

  return (
    <Router>
      <div>
        <div className="main-header">
          <MainHeader login={login} setLogin={setLogin} />
        </div>
        <Switch>
          <Route path='/create-account' render={() => <CreateAccountPage login={login} />} />
          <Route path='/sign-in' render={() => <SignInPage login={login} setLogin={setLogin} />} />
          <Route path='/create-idea' component={CreateIdea} />
          <Route path='/homepage' render={() => <HomePage login={login} />} />
          <Route exact path='/' render={() => <HomePage login={login} />} />
          {/* Page not found route -> catches everything not matching route above */}
          <Route path='/' component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;