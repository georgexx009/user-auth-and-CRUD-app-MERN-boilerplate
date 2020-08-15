import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainCardContainer from './components/container/mainCardContainer/index';
import UserProfile from './componentsV2/containers/userProfile';
import TestingContainer from './components/container/testingContainer';
import Navbar from './componentsV2/containers/navbar';
import AllPublications from './sections/AllPublications';
import MyNotes from './sections/MyNotes';
import HelpersContainer from './components/container/helpersContainer';
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
            <Route path="/cards">
              <MainCardContainer />
            </Route>
            <Route path="/testing">
              <TestingContainer />
            </Route>
            <Route path="/registration">
              <RegistrationV2 />
            </Route>
            <Route path="/login">
              <LogInV2 />
            </Route>
            <Route path="/allPublications">
              <AllPublications />
            </Route>
            <Route path="/MyPublications">
              <MyPublications />
            </Route>
            <Route path="/MyNotes">
              <MyNotes />
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
