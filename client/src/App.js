import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import PageNotFound from './components/PageNotFound';
import CreateIdea from './components/CreateIdea';
import SignInPage from './components/page/SignInPage';
import MainHeader from './components/header/MainHeader';
import CreateAccountPage from './components/page/CreateAccountPage';
import axios from 'axios';


function App() {
  const [login, setLogin] = useState({
    loggedIn: false,
    username: null
  });

  // get user
  useEffect(() => {
    axios.post('http://localhost:8082/accounts/user', null, { withCredentials: true })
      .then(response => {
        if (response.data) {
          setLogin(response.data);
        }
      })
      .catch(err => console.log(err))
  }, []);


  console.log(login);

  return (
    <Router>
      <div>
        <div className="main-header">
          <MainHeader currentPage="CurrentPageTest" />
        </div>
        <Switch>
          <Route path='/create-account' render={() => <CreateAccountPage />} />
          <Route path='/sign-in' render={() => <SignInPage loginToken={login} setLoginToken={setLogin} />} />
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