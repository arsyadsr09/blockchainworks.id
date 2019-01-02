// plugin css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-owl-carousel2/src/owl.carousel.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/index.css";

//import js
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
