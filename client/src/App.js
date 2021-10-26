import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import PageNotFound from './components/PageNotFound';
import CreateIdea from './components/CreateIdea';
import SignInPage from './components/page/SignInPage';
import MainHeader from './components/header/MainHeader';
import CreateAccountPage from './components/page/CreateAccountPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginToken, setLoginToken] = useState();
  return (
    <Router>
      <div>
        <div className="main-header">
          <MainHeader currentPage="CurrentPageTest" />
        </div>
        <Switch>
          <Route path='/create-account' element={<CreateAccountPage />} />
          <Route path='/sign-in' component={SignInPage} />
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