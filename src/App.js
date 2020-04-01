import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Single from './components/Single';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div id="colorlib-page">
          <Sidebar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/blog/:slug' component={Blog}/>
            <Route exact path='/post/:slug' component={Single}/>
          </Switch>
        </div>
      </Router>
    );
  }
}