import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Single from './components/Single';
import {createBrowserHistory} from 'history';

const myHistory = createBrowserHistory();
myHistory.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

export default class App extends Component {

  render() {
    return (
      <Router history={myHistory}>
        <div id="colorlib-page">
          <Sidebar/>
          <div id="colorlib-main">
            <section className="ftco-section ftco-no-pt ftco-no-pb">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/blog/:slug' component={Blog}/>
                <Route exact path='/post/:slug' component={Single}/>
              </Switch>
            </section>
          </div>
        </div>
        {/* <script src="./assets/js/jquery.min.js"></script>
        <script src="./assets/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>
        <script src="./assets/js/jquery.easing.1.3.js"></script>
        <script src="./assets/js/jquery.waypoints.min.js"></script>
        <script src="./assets/js/jquery.stellar.min.js"></script>
        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/jquery.magnific-popup.min.js"></script>
        <script src="./assets/js/aos.js"></script>
        <script src="./assets/js/jquery.animateNumber.min.js"></script>
        <script src="./assets/js/scrollax.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="./assets/js/google-map.js"></script>
        <script src="./assets/js/main.js"></script> */}
      </Router>
    );
  }
}