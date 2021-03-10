import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
        </div>
      </Router>
    );
  }
}

export default App;