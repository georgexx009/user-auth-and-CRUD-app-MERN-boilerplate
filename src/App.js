import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import UserProfile from './componentsV2/containers/userProfile';
import Navbar from './componentsV2/containers/Navbar';

// sections - paths
import AllPublications from './sections/AllPublications';
import HelpersContainer from './componentsV2/containers/HelpersContainer';
import RegistrationV2 from './sections/Registration';
import LogInV2 from './sections/LogIn';
import MyPublications from './sections/MyPublications';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div id="app">
          <Switch>
            <Route path="/user-profile">
              <UserProfile />
            </Route>
            <Route path="/registration">
              <RegistrationV2 />
            </Route>
            <Route path="/login">
              <LogInV2 />
            </Route>
            <Route path="/MyPublications">
              <MyPublications />
            </Route>
            <Route path="/">
              <AllPublications />
            </Route>
          </Switch>

          <HelpersContainer />
        </div>
      </Router>
    );
  }
}

export default App;
