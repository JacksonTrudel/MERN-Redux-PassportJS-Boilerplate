import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateIdea from './components/CreateIdea';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/create-idea' component={CreateIdea} />
          {/*<Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
    <Route path='/show-book/:id' component={ShowBookDetails} />*/}
        </div>
      </Router>
    );
  }
}

export default App;