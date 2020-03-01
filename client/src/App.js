import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './components/searchPage';
import NavBar from './components/NavBar';
import ViewPage from './components/ViewPage';
import ListsPage from './components/ListsPage';
import './components/main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/view-listings" component={ViewPage} />
            <Route path="/lists-page" component={ListsPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
