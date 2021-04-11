import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// imports
import Nav from './Nav';
import Map from './Map';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
      </Switch>
    </div>
    </Router>
  );
}