import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CatAPI from './components/CatAPI';
import DogAPI from './components/DogAPI';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>Welcome!</h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/CatAPI">
              <CatAPI />
            </Route>

            <Route path="/DogAPI">
              <DogAPI />
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  )
}

export default App;