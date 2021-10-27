import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import PageNotFound from './components/PageNotFound';
import CreateIdea from './components/CreateIdea';
import SignInPage from './components/page/SignInPage';
import MainHeader from './components/header/MainHeader';
import CreateAccountPage from './components/page/CreateAccountPage';

function App() {
  const [login, setLogin] = useState({
    loggedIn: false,
    username: null
  });

  // get user
  useEffect(() => {
    const username = localStorage.getItem("username");
    const loggedIn = localStorage.getItem("loggedIn");

    setLogin({
      loggedIn,
      username,
    });
  }, []);

  return (
    <Router>
      <div>
        <div className="main-header">
          <MainHeader currentPage="CurrentPageTest" login={login} setLogin={setLogin} />
        </div>
        <Switch>
          <Route path='/create-account' render={() => <CreateAccountPage login={login} />} />
          <Route path='/sign-in' render={() => <SignInPage login={login} setLogin={setLogin} />} />
          <Route path='/create-idea' component={CreateIdea} />
          <Route path='/' component={PageNotFound} />
        </Switch>
        {/*<Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
    <Route path='/show-book/:id' component={ShowBookDetails} />*/}
      </div>
    </Router>
  );
}


export default App;