import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/main.css";
// import "./assets/js/jquery.min.js";
// import "./assets/js/jquery-migrate-3.0.1.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.easing.1.3.js";
// import "./assets/js/jquery.waypoints.min.js";
// import "./assets/js/jquery.stellar.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/aos.js";
// import "./assets/js/jquery.animateNumber.min.js";
// import "./assets/js/scrollax.min.js";
// import "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false";
// import "./assets/js/google-map.js";
// import "./assets/js/main.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
