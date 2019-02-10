import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import Landing from "./Landing";
import Best from "../containers/Best";
import Archives from "../containers/Archives";
import Popular from "../containers/Popular";

import Nav from "../components/Nav";

const App = () => (
  <Router>
    <ScrollToTop>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/best" component={Best} />
          <Route path="/archives" component={Archives} />
          <Route path="/popular" component={Popular} />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
